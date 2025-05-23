'use client';

import { useEffect, useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import "../app/globals.css";

if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js';
}

interface PDFViewerProps {
  fileUrl: string;
  onClose: () => void;
  filename: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl, onClose, filename }) => {
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnlarge, setIsEnlarge] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const enlargeWindow = () => {
    setIsEnlarge(!isEnlarge);
  };

  useEffect(() => {
    setIsReady(true);
  }, []);


  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <div
        className={`${
          isEnlarge
            ? 'fixed top-0 left-0 w-full h-full z-[9999]'
            : 'fixed top-8  justify-center w-[45vw] h-[85vh] z-[9999]'
        } bg-page-grey rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out transform ${
          isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <div className="h-12 bg-gradient-to-r transparent-grey flex items-center px-4 text-lg font-semibold text-white">
          <div className="flex space-x-2">
          <div className="w-4 h-4 rounded-full bg-red-500 cursor-pointer" onClick={onClose}/>
              <div className="w-4 h-4 rounded-full bg-yellow-500 cursor-pointer"  onClick={onClose} />
              <div className="w-4 h-4 rounded-full bg-green-500 cursor-pointer" onClick={enlargeWindow} />
          </div>
          <div className="text-center w-full">{filename}</div>
        </div>

        {isReady && (
          <Worker workerUrl={pdfjs.GlobalWorkerOptions.workerSrc}>
            <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        )}
    
      </div>
    </>
  );
};

export default PDFViewer;
