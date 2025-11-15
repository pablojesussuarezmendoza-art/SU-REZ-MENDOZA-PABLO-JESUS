import { mockAttendees } from '../data/attendees';
import { Attendee, AttendanceStatus } from '../types';

let attendees: Attendee[] = [...mockAttendees];

export const attendanceService = {
  getAttendees: async (): Promise<Attendee[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...attendees].sort((a, b) => a.name.localeCompare(b.name)));
      }, 200);
    });
  },

  registerAttendee: async (id: string): Promise<{ success: boolean; message: string; attendee?: Attendee }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const attendeeIndex = attendees.findIndex((a) => a.id === id || a.matricula === id);

        if (attendeeIndex === -1) {
          resolve({ success: false, message: 'Asistente no encontrado.' });
          return;
        }

        const attendee = attendees[attendeeIndex];

        if (attendee.status === AttendanceStatus.REGISTERED) {
          resolve({ success: false, message: 'El asistente ya ha sido registrado.', attendee });
          return;
        }

        const updatedAttendee = {
          ...attendee,
          status: AttendanceStatus.REGISTERED,
          registeredAt: new Date().toLocaleString('es-ES'),
          progress: {
            ...attendee.progress,
            checkIn: true,
          }
        };

        attendees = [
          ...attendees.slice(0, attendeeIndex),
          updatedAttendee,
          ...attendees.slice(attendeeIndex + 1),
        ];

        resolve({ success: true, message: '¡Registro exitoso!', attendee: updatedAttendee });
      }, 500);
    });
  },
  
  addAttendee: async (newAttendeeData: Omit<Attendee, 'id' | 'status' | 'registeredAt' | 'progress'>): Promise<{ success: boolean; message: string; attendee?: Attendee }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const existing = attendees.find(a => a.email === newAttendeeData.email || a.matricula === newAttendeeData.matricula);
        if (existing) {
          resolve({ success: false, message: 'La matrícula o el correo ya existen.' });
          return;
        }

        const newAttendee: Attendee = {
          ...newAttendeeData,
          id: `manual-${Date.now()}`,
          status: AttendanceStatus.PENDING,
          progress: {
            checkIn: false,
            workshop: false,
            conference: false,
            boxLunch: false,
          },
        };

        attendees.push(newAttendee);
        resolve({ success: true, message: 'Asistente añadido exitosamente.', attendee: newAttendee });
      }, 300);
    });
  }
};