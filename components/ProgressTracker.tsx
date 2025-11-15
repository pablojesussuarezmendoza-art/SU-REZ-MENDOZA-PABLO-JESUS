import React from 'react';
import { AttendeeProgress } from '../types';
import { CheckinIcon, TalleresIcon, ConferenciasIcon, BoxLunchIcon } from './Icons';

interface ProgressTrackerProps {
  progress: AttendeeProgress;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ progress }) => {
    const steps = [
        { label: 'Registro', completed: progress.checkIn, icon: <CheckinIcon /> },
        { label: 'Taller', completed: progress.workshop, icon: <TalleresIcon /> },
        { label: 'Conferencia', completed: progress.conference, icon: <ConferenciasIcon /> },
        { label: 'Box Lunch', completed: progress.boxLunch, icon: <BoxLunchIcon /> },
    ];

    return (
        <div className="w-full pt-2 pb-6">
            <div className="flex items-center">
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <div className="relative flex flex-col items-center w-16">
                            <div title={step.label} className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${step.completed ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-500'}`}>
                                {React.cloneElement(step.icon, { className: "h-5 w-5" })}
                            </div>
                            <div className="absolute top-9 text-center">
                                <p className="text-xs text-gray-500">{step.label}</p>
                            </div>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`flex-1 h-1 transition-colors duration-300 ${steps[index + 1].completed ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ProgressTracker;
