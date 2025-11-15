import React, { useEffect, useRef } from 'react';

// Esto es para informar a TypeScript sobre la clase global Html5QrcodeScanner
declare global {
  interface Window {
    Html5QrcodeScanner: any;
  }
}
interface QRScannerProps {
  onScanSuccess: (decodedText: string) => void;
  onScanFailure: (error: string) => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScanSuccess, onScanFailure }) => {
  const scannerRef = useRef<any>(null);
  const readerId = "qr-reader";

  useEffect(() => {
    if (!scannerRef.current) {
      const html5QrcodeScanner = new window.Html5QrcodeScanner(
        readerId,
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
          rememberLastUsedCamera: true,
        },
        /* verbose= */ false
      );
      
      scannerRef.current = html5QrcodeScanner;
      
      html5QrcodeScanner.render((decodedText: string) => {
        onScanSuccess(decodedText);
        html5QrcodeScanner.pause();
        setTimeout(() => {
          if (scannerRef.current && scannerRef.current.getState() === 2 /* PAUSED */) {
            html5QrcodeScanner.resume();
          }
        }, 3000);
      }, (error: string) => {
        // onScanFailure no se usa aquí para evitar el spam de errores en cada fotograma sin un código QR
      });
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch((error: any) => {
          console.error("No se pudo limpiar html5-qrcode-scanner.", error);
        });
        scannerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-4 rounded-lg shadow">
      <div id={readerId} className="rounded-lg overflow-hidden"></div>
    </div>
  );
};

export default QRScanner;