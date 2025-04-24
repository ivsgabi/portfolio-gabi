'use client';
import { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import PDFViewer from "../PDFViewer";

interface FolderWindowProps {
  closeWindow: () => void;
}

export default function ExperienceFolder({ closeWindow }: FolderWindowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isEnlarge, setIsEnlarge] = useState(false);
  const [openFolder, setOpenFolder] = useState<'epitech' | 'nricher' | 'projects' | null>(null);
  const [isFileOpen, setIsFileOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const enlargeWindow = () => setIsEnlarge(!isEnlarge);

  const openFile = (url: string) => {
    setPdfUrl(url);
    setIsFileOpen(true);
  };

  const renderBackArrow = () => (
    <IoIosArrowBack onClick={() => setOpenFolder(null)} className="absolute left-5 text-gray-400 h-5 w-5" />
  );

  return (
    <>
      {isEnlarge && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/40 backdrop-blur-sm z-[9998]" />
      )}

      <div
        className={`${
          isEnlarge ? 'fixed top-0 left-0 w-screen h-screen z-[10000]' : 'w-[60vw]'
        } flex items-center justify-center bg-transparent transition-all duration-300`}
      >
        <div
          className={`relative ${
            isEnlarge ? 'w-full h-full' : 'w-full h-[62vh]'
          } bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out transform ${
            isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
        >
          <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-100 flex items-center px-4 text-lg font-semibold text-gray-800">
            <div className="flex space-x-2">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500 cursor-pointer" onClick={closeWindow}></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500" />
              <div className="w-4 h-4 rounded-full bg-green-500 cursor-pointer" onClick={enlargeWindow} />
            </div>
            <div className="text-center w-full">XP</div>
          </div>

          <div className="p-4 space-y-4 overflow-auto h-full">
            {!openFolder && (
              <div className="flex space-x-15 mx-5">
                <div className="flex-cols h-30 w-30 cursor-pointer" onClick={() => setOpenFolder('epitech')}>
                  <div className="pale-pink-folder-icon-pic mt-[-5]" />
                  <span className="items-center justify-center ml-11 mt-[-10] flex text-center text-black text-sm">epitech</span>
                </div>
                <div className="flex-cols h-30 w-30 cursor-pointer" onClick={() => setOpenFolder('nricher')}>
                  <div className="pale-pink-folder-icon-pic mt-[-5]" />
                  <span className="items-center justify-center ml-11 mt-[-10] flex text-center text-black text-sm">nricher</span>
                </div>
                <div className="flex-cols h-30 w-30 cursor-pointer" onClick={() => setOpenFolder('projects')}>
                  <div className="pale-pink-folder-icon-pic mt-[-5]" />
                  <span className="items-center justify-center ml-11 mt-[-10] flex text-center text-black text-sm">favorites projects</span>
                </div>
              </div>
            )}

            {openFolder === 'epitech' && (
              <>
                {renderBackArrow()}
                <div className="flex space-x-3 mt-5 ml-5">
                  <div onClick={() => openFile('/folder-content/XP/epitech/astek-tasks.pdf')} className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">astek-tasks.pdf</span>
                  </div>
                  <div onClick={() => openFile('/folder-content/XP/epitech/astek-stack.pdf')} className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">astek-stack.pdf</span>
                  </div>
                </div>
              </>
            )}

            {openFolder === 'nricher' && (
              <>
                {renderBackArrow()}
                <div className="flex space-x-3 mt-5 ml-5">
                  <div onClick={() => openFile('/folder-content/XP/nricher/nricher-tasks.pdf')} className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">nricher-tasks.pdf</span>
                  </div>
                  <div onClick={() => openFile('/folder-content/XP/nricher/nricher-stack.pdf')} className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">nricher-stack.pdf</span>
                  </div>
                </div>
              </>
            )}

            {openFolder === 'projects' && (
              <>
                {renderBackArrow()}
                <div className="flex space-x-3 mt-5 justify-center">
                <div className={`${isEnlarge ? "grid grid-cols-10 gap-y-30 gap-x-15 mt-[-30]" : "grid grid-cols-6 gap-y-30 gap-x-15 mt-[-30]"}`}>
                  <div onClick={() => openFile('/folder-content/XP/projects/bsq-sheet.pdf')} className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">C-BSQ.pdf</span>
                  </div>
                  {/* <div onClick={() => openFile('/folder-content/XP/projects/coming.pdf')} className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">C-my_printf.pdf</span>
                  </div> */}
                  <div onClick={() => openFile('/folder-content/XP/projects/minishell-sheet.pdf')} className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">C-minishell.pdf</span>
                  </div>
                  {/* <div onClick={() => openFile('/folder-content/XP/project-x-stack.pdf')} className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">C-my_paint.pdf</span>
                  </div> */}
                  {/* <div onClick={() => openFile('/folder-content/XP/project-x-stack.pdf')} className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">Haskell-ImageCompressor.pdf</span>
                  </div> */}
                  <div onClick={() => openFile('/folder-content/XP/projects/raytracer-sheet.pdf')} className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">C++-RayTracer.pdf</span>
                  </div>
                  {/* <div onClick={() => openFile('/folder-content/XP/project-x-stack.pdf')} className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">Web-AREA.pdf</span>
                  </div> */}
                  <div onClick={() => openFile('/folder-content/XP/projects/rtype-sheet.pdf')} className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                    <div className="pink-file-icon-pic mt-[-20]" />
                    <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">C++-RType.pdf</span>
                  </div>
                </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {isFileOpen && pdfUrl && (
        <PDFViewer fileUrl={pdfUrl} onClose={() => setIsFileOpen(false)} />
      )}
    </>
  );
}
