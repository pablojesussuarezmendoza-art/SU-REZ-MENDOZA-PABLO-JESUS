import { Attendee } from '../types';

export const exportToCsv = (attendees: Attendee[]) => {
  const headers = ['Nombre', 'Matrícula', 'Correo Electrónico', 'Grupo', 'Estado', 'Fecha de Registro'];
  const csvRows = [headers.join(',')];

  attendees.forEach(attendee => {
    const row = [
      `"${attendee.name}"`,
      attendee.matricula,
      attendee.email,
      attendee.grupo,
      attendee.status,
      attendee.registeredAt ? `"${attendee.registeredAt}"` : 'No Registrado'
    ];
    csvRows.push(row.join(','));
  });

  const csvString = csvRows.join('\n');
  const blob = new Blob([`\uFEFF${csvString}`], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'reporte_asistencia_simposio.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};