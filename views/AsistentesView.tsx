import React from 'react';
import { Attendee } from '../types';
import AddAttendeeForm from '../components/AddAttendeeForm';
import AttendeeList from '../components/AttendeeList';

interface AsistentesViewProps {
  attendees: Attendee[];
  onAddAttendee: (newAttendeeData: Omit<Attendee, 'id' | 'status' | 'registeredAt'>) => Promise<{ success: boolean; message: string }>;
  onExport: () => void;
}

const AsistentesView: React.FC<AsistentesViewProps> = ({ attendees, onAddAttendee, onExport }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <AttendeeList attendees={attendees} onExport={onExport} />
      </div>
      <div className="lg:col-span-1">
        <AddAttendeeForm onAddAttendee={onAddAttendee} />
      </div>
    </div>
  );
};

export default AsistentesView;
