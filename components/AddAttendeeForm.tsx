import React, { useState } from 'react';
import { Attendee } from '../types';

interface AddAttendeeFormProps {
    onAddAttendee: (newAttendeeData: Omit<Attendee, 'id' | 'status' | 'registeredAt' | 'progress'>) => Promise<{ success: boolean; message: string }>;
}

const groups = ['8101', '8102', '8103', '8301', '8302', '8303', '8501', '8502', '8503', '8701', '8702'];

const AddAttendeeForm: React.FC<AddAttendeeFormProps> = ({ onAddAttendee }) => {
    const [formData, setFormData] = useState({ name: '', matricula: '', grupo: '', email: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!formData.name || !formData.matricula || !formData.grupo || !formData.email) {
            setFeedback({ type: 'error', message: 'Todos los campos son obligatorios.' });
            return;
        }

        setIsSubmitting(true);
        setFeedback(null);
        
        const result = await onAddAttendee(formData);
        
        setFeedback({ type: result.success ? 'success' : 'error', message: result.message });

        if (result.success) {
            setFormData({ name: '', matricula: '', grupo: '', email: '' });
        }
        
        setIsSubmitting(false);

        setTimeout(() => setFeedback(null), 4000);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-bold text-gray-800">Añadir Nuevo Asistente</h3>
            <p className="text-gray-500 mt-1 text-sm">Registrar una nueva persona para el evento (manual).</p>
            
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Nombre(s) Apellido Paterno Apellido Materno" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                </div>
                <div>
                    <label htmlFor="matricula" className="block text-sm font-medium text-gray-700">Matrícula</label>
                    <input type="text" name="matricula" id="matricula" value={formData.matricula} onChange={handleChange} placeholder="Tu matrícula escolar" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                </div>
                <div>
                    <label htmlFor="grupo" className="block text-sm font-medium text-gray-700">Grupo</label>
                    <select name="grupo" id="grupo" value={formData.grupo} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white">
                        <option value="">Selecciona tu grupo</option>
                        {groups.map(group => (
                            <option key={group} value={group}>{group}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="tu.email@example.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 disabled:bg-blue-300">
                    {isSubmitting ? 'Registrando...' : 'Registrar Asistente'}
                </button>
            </form>
            {feedback && (
                <div className={`mt-4 p-3 rounded-md text-sm ${
                    feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                    {feedback.message}
                </div>
            )}
        </div>
    );
};

export default AddAttendeeForm;