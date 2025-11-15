import React from 'react';
import { ScanResult } from '../types';

interface ScanResultCardProps {
  result: ScanResult | null;
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ErrorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
);

const TimeIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 9.586V6z" clipRule="evenodd" />
    </svg>
);

const ScanResultCard: React.FC<ScanResultCardProps> = ({ result }) => {
  if (!result) return null;

  const isSuccess = result.type === 'success';
  const bgColor = isSuccess ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300';
  const textColor = isSuccess ? 'text-green-700' : 'text-red-700';

  return (
    <div className={`fixed inset-x-0 top-24 mx-auto max-w-sm w-full p-4 border rounded-lg shadow-lg bg-white transition-opacity duration-300 ${bgColor} animate-fade-in-down z-50`}>
      <div className="flex flex-col items-center text-center">
        {isSuccess ? <CheckIcon /> : <ErrorIcon />}
        <h2 className={`mt-2 text-2xl font-bold ${textColor}`}>
          {isSuccess ? '¡Bienvenido/a!' : 'Error'}
        </h2>
        <p className="text-gray-600 mt-1">{result.message}</p>
        {result.attendee && (
          <div className="mt-4 pt-4 border-t border-gray-200 w-full text-left space-y-2">
            <div className="flex items-center">
              <UserIcon />
              <span className="text-lg font-medium text-gray-800">{result.attendee.name}</span>
            </div>
            {result.attendee.registeredAt && (
              <div className="flex items-center">
                <TimeIcon />
                <span className="text-sm text-gray-500">{result.attendee.registeredAt}</span>
              </div>
            )}
          </div>
        )}
      </div>
      <style>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ScanResultCard;