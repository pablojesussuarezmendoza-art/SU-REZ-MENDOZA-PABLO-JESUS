import React from 'react';
import QRScanner from '../components/QRScanner';
import ScanResultCard from '../components/ScanResultCard';
import { ScanResult } from '../types';

interface CheckinViewProps {
  onScanSuccess: (decodedText: string) => void;
  scanResult: ScanResult | null;
}

const CheckinView: React.FC<CheckinViewProps> = ({ onScanSuccess, scanResult }) => {
  const handleScanFailure = (error: string) => {
    console.error(`Error de escaneo QR: ${error}`);
  };

  return (
    <div className="relative">
      <ScanResultCard result={scanResult} />
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Check-in de Asistentes</h2>
      <p className="text-gray-500 mb-6 text-center max-w-xl mx-auto">
        Apunta la cámara al código QR del asistente para registrar su entrada. El resultado del escaneo aparecerá en la parte superior.
      </p>
      <QRScanner onScanSuccess={onScanSuccess} onScanFailure={handleScanFailure} />
    </div>
  );
};

export default CheckinView;
