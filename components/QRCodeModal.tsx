import React, { useEffect, useRef } from 'react';
import { Attendee } from '../types';

declare const QRCode: any;

interface QRCodeModalProps {
  attendee: Attendee | null;
  onClose: () => void;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ attendee, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (attendee && canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, attendee.matricula, { width: 256, margin: 2 }, (error: any) => {
        if (error) console.error(error);
      });
    }
  }, [attendee]);

  const handlePrint = () => {
    window.print();
  };

  if (!attendee) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 print:p-0"
        role="dialog"
        aria-modal="true"
        aria-labelledby="qr-modal-title"
      >
        <div id="qr-modal-content" className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full max-w-sm text-center transform transition-all print:shadow-none print:rounded-none">
          <h2 id="qr-modal-title" className="text-xl font-bold text-gray-800 mb-2">Código QR de Asistencia</h2>
          <p className="text-gray-600">Escanea este código para el check-in.</p>
          <div className="my-6 flex justify-center">
            <canvas ref={canvasRef} className="rounded-lg shadow-inner"></canvas>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-bold text-lg text-gray-900">{attendee.name}</p>
            <p className="text-sm text-gray-500 mt-1">Matrícula: {attendee.matricula}</p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row-reverse gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
            >
              Imprimir
            </button>
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:text-sm"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
       <style>{`
        @media print {
          body > *:not(#qr-modal-content-wrapper) {
            visibility: hidden;
          }
          #qr-modal-content-wrapper, #qr-modal-content-wrapper * {
            visibility: visible;
          }
          #qr-modal-content-wrapper {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
      <div id="qr-modal-content-wrapper">{/* Wrapper for printing */}
          {attendee && (
              <div className="bg-white p-8">
                  {/* Contenido duplicado para impresión si es necesario o simplemente confiar en el modal */}
              </div>
          )}
      </div>
    </>
  );
};

export default QRCodeModal;
