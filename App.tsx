import React, { useState, useEffect, useCallback } from 'react';
import MainLayout from './layout/MainLayout';
import AsistentesView from './views/AsistentesView';
import CheckinView from './views/CheckinView';
import { attendanceService } from './services/attendanceService';
import { Attendee, ScanResult } from './types';

export type ActiveView = 'panel' | 'asistentes' | 'check-in' | 'reportes' | 'talleres' | 'conferencias' | 'box-lunch';

const App: React.FC = () => {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [activeView, setActiveView] = useState<ActiveView>('asistentes');
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAttendees = useCallback(async () => {
    try {
      // No se establece isLoading a true aquí para evitar el parpadeo en las recargas
      const data = await attendanceService.getAttendees();
      setAttendees(data);
    } catch (error) {
      console.error("No se pudieron obtener los asistentes:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAttendees();
  }, [fetchAttendees]);

  const handleScanSuccess = async (decodedText: string) => {
    const serviceResult = await attendanceService.registerAttendee(decodedText);
    
    // Transforma el resultado del servicio al formato que espera el estado `scanResult`
    const resultForState: ScanResult = {
      type: serviceResult.success ? 'success' : 'error',
      message: serviceResult.message,
      attendee: serviceResult.attendee,
    };
    
    setScanResult(resultForState);

    if (serviceResult.success) {
      await fetchAttendees();
    }

    setTimeout(() => {
      setScanResult(null);
    }, 4000);
  };
  
  const handleAddAttendee = async (newAttendeeData: Omit<Attendee, 'id' | 'status' | 'registeredAt' | 'progress'>) => {
    const result = await attendanceService.addAttendee(newAttendeeData);
    if(result.success) {
        await fetchAttendees();
    }
    return result;
  }

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      );
    }

    switch (activeView) {
      case 'asistentes':
        return <AsistentesView attendees={attendees} onAddAttendee={handleAddAttendee} onExport={() => exportToCsv(attendees)} />;
      case 'check-in':
        return <CheckinView onScanSuccess={handleScanSuccess} scanResult={scanResult} />;
      // Placeholder para otras vistas
      case 'panel':
      case 'reportes':
      case 'talleres':
      case 'conferencias':
      case 'box-lunch':
      default:
        return (
          <div className="text-center p-10 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold text-gray-700">Vista de '{activeView}'</h2>
            <p className="text-gray-500 mt-2">Esta sección está en construcción.</p>
          </div>
        );
    }
  };

  return (
    <MainLayout activeView={activeView} setActiveView={setActiveView}>
      {renderContent()}
    </MainLayout>
  );
};

// Se importa la utilidad de exportación aquí para que esté disponible en el ámbito del App.
import { exportToCsv } from './utils/csvExporter';

export default App;