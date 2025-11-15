export enum AttendanceStatus {
  PENDING = 'Pendiente',
  REGISTERED = 'Registrado',
}

export interface AttendeeProgress {
  checkIn: boolean;
  workshop: boolean;
  conference: boolean;
  boxLunch: boolean;
}

export interface Attendee {
  id: string;
  name: string;
  matricula: string;
  grupo: string;
  email: string;
  status: AttendanceStatus;
  registeredAt?: string;
  progress: AttendeeProgress;
}

export interface ScanResult {
  type: 'success' | 'error';
  message: string;
  attendee?: Attendee;
}