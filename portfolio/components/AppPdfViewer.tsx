'use client';

import { useEffect, useState } from 'react';
import {
  RPProvider,
  RPDefaultLayout,
  RPPages,
} from '@pdf-viewer/react';

interface AppPdfViewerProps {
  fileUrl: string;
  onClose: () => void;
  showToolbar?: boolean;
  providerProps?: React.ComponentProps<typeof RPProvider>;
  defaultLayoutProps?: React.ComponentProps<typeof RPDefaultLayout>;
}

const AppPdfViewer: React.FC<AppPdfViewerProps> = ({
  fileUrl,
  onClose,
  showToolbar = true,
  providerProps,
  defaultLayoutProps,
}) => {
  const [isEnlarge, setIsEnlarge] = useState(false); 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const enlargeWindow = () => setIsEnlarge(!isEnlarge);

  return (
    <div
      className={`${
        isEnlarge
            ? 'fixed top-0 left-0 w-full h-full z-[9999]'
            : 'fixed top-15 justify-center w-[45vw] h-[85vh] z-[9999]'
        } bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out transform ${
          isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
    >
      <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-100 flex items-center px-4 text-lg font-semibold text-gray-800 z-[10000]">
        <div className="flex space-x-2">
          <div
            className="w-3.5 h-3.5 rounded-full bg-red-500 cursor-pointer"
            onClick={onClose}
          ></div>
          <div className="w-4 h-4 rounded-full bg-yellow-500" />
          <div
            className="w-4 h-4 rounded-full bg-green-500 cursor-pointer"
            onClick={enlargeWindow}
          />
        </div>
        <div className="text-center w-full">CV</div>
      </div>

      <div className="w-full h-[calc(100%-3rem)]">
        <RPProvider src={fileUrl} {...providerProps}>
          {showToolbar ? (
            <RPDefaultLayout
              {...defaultLayoutProps}
              style={{ width: '100%', height: '100%' }}
            >
              <RPPages />
            </RPDefaultLayout>
          ) : (
            <div style={{ width: '100%', height: '100%' }}>
              <RPPages />
            </div>
          )}
        </RPProvider>
      </div>
    </div>
  );
};

export default AppPdfViewer;
