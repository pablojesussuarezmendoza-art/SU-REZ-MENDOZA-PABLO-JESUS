import React, { useState } from 'react';
import { Attendee } from '../types';
import { ExportIcon, QRIcon } from './Icons';
import QRCodeModal from './QRCodeModal';
import ProgressTracker from './ProgressTracker';

interface AttendeeListProps {
  attendees: Attendee[];
  onExport: () => void;
}

const groups = ['8101', '8102', '8103', '8301', '8302', '8303', '8501', '8502', '8503', '8701', '8702'];

const AttendeeList: React.FC<AttendeeListProps> = ({ attendees, onExport }) => {
    const [filter, setFilter] = useState('Todos los grupos');
    const [selectedAttendee, setSelectedAttendee] = useState<Attendee | null>(null);

    const handleNameFormat = (name: string) => {
        const parts = name.split(' ');
        if(parts.length < 3) return <span className="font-semibold">{name}</span>;
        
        const lastName1 = parts[0];
        const lastName2 = parts[1];
        const firstName = parts.slice(2).join(' ');

        return (
            <div>
                <span className="font-semibold">{lastName1} {lastName2}</span>
                <br />
                <span className="text-sm text-gray-500">{firstName}</span>
            </div>
        )
    };
    
    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Trazabilidad de Asistentes</h2>
                        <p className="text-gray-500 mt-1">Ver y gestionar los asistentes y su progreso en el evento.</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-4 md:mt-0">
                        <select 
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Todos los grupos</option>
                            {groups.map(group => (
                                <option key={group} value={group}>{group}</option>
                            ))}
                        </select>
                        <button
                            onClick={onExport}
                            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                        >
                            <ExportIcon />
                            Exportar a CSV
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-[900px]">
                        {/* Headers */}
                        <div className="grid grid-cols-12 gap-4 px-4 py-2 bg-gray-50 border-b border-gray-200 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            <div className="col-span-3">Nombre</div>
                            <div className="col-span-2">Matrícula</div>
                            <div className="col-span-3">Correo Electrónico</div>
                            <div className="col-span-3">Progreso del Evento</div>
                            <div className="col-span-1 text-center">Código QR</div>
                        </div>
                        {/* Body */}
                        <div className="divide-y divide-gray-200">
                            {attendees
                                .filter(a => filter === 'Todos los grupos' || a.grupo === filter)
                                .map(attendee => (
                                <div key={attendee.id} className="grid grid-cols-12 gap-4 px-4 py-3 text-sm text-gray-800 items-center">
                                    <div className="col-span-3">{handleNameFormat(attendee.name)}</div>
                                    <div className="col-span-2 text-gray-600 self-center">{attendee.matricula}</div>
                                    <div className="col-span-3 text-gray-600 self-center truncate">{attendee.email}</div>
                                    <div className="col-span-3 flex items-center">
                                        <ProgressTracker progress={attendee.progress} />
                                    </div>
                                    <div className="col-span-1 text-center">
                                        <button 
                                            onClick={() => setSelectedAttendee(attendee)}
                                            className="text-gray-400 hover:text-blue-600 transition-colors"
                                            title="Generar Código QR"
                                        >
                                            <QRIcon />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <QRCodeModal attendee={selectedAttendee} onClose={() => setSelectedAttendee(null)} />
        </>
    );
};

export default AttendeeList;