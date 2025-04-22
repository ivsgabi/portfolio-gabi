'use client';

import { useEffect, useState } from "react";
import PDFViewer from "../PDFViewer";

interface FolderWindowProps {
  closeWindow: () => void;
}

export default function CVFolder({ closeWindow }: FolderWindowProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isEnlarge, setIsEnlarge] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const enlargeWindow = () => {
    setIsEnlarge(!isEnlarge);
  };

  const openCV = (fileUrl: string) => {
    setPdfUrl(fileUrl);
    setIsCVOpen(true);
  };

  return (
    <>
      {isEnlarge && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/40 backdrop-blur-sm z-[9998]" />
      )}

      <div
        className={`${
          isEnlarge
            ? 'fixed top-0 left-0 w-screen h-screen z-[10000]'
            : 'w-[60vw]'
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
              <div
                className="w-3.5 h-3.5 rounded-full bg-red-500 cursor-pointer"
                onClick={closeWindow}
              ></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500" />
              <div
                className="w-4 h-4 rounded-full bg-green-500 cursor-pointer"
                onClick={enlargeWindow}
              />
            </div>
            <div className="text-center w-full">CV</div>
          </div>

          <div className="p-4 space-y-4 overflow-auto h-full">
            <div className="flex space-x-3 mx-5">
              <a onClick={() => openCV("/folder-content/CV/CV-portfolio-FR-GABA.pdf")}>
                <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                  <div className="pink-file-icon-pic mt-[-20]" />
                  <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                    CV-Johana-GABA-FR-2025.pdf
                  </span>
                </div>
              </a>

              <a onClick={() => openCV("/folder-content/CV/CV-portfolio-EN-GABA.pdf")}>
                <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
                  <div className="pink-file-icon-pic mt-[-20]" />
                  <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
                    CV-Johana-GABA-EN-2025.pdf
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {isCVOpen && pdfUrl && (
        <PDFViewer fileUrl={pdfUrl} onClose={() => setIsCVOpen(false)} />
      )}
    </>
  );
}

// 'use client';
// import { useEffect, useState } from "react";
// import { LazyAppPdfViewer } from "../LazyAppPdfViewer";

// interface FolderWindowProps {
//   closeWindow: () => void;
// }

// export default function CVFolder({ closeWindow }: FolderWindowProps) {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isEnlarge, setIsEnlarge] = useState(false);
//   const [isCVOpen, setIsCVOpen] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 100);
//   }, []);

//   const enlargeWindow = () => {
//     setIsEnlarge(!isEnlarge);
//   };

//   const openCV = () => {
//     setIsCVOpen(true);
//   };

//   return (
//     <>
//       {isEnlarge && (
//         <div className="fixed top-0 left-0 w-screen h-screen bg-black/40 backdrop-blur-sm z-[9998]" />
//       )}

//       <div
//         className={`${
//           isEnlarge
//             ? 'fixed top-0 left-0 w-screen h-screen z-[10000]'
//             : 'w-[60vw]'
//         } flex items-center justify-center bg-transparent transition-all duration-300`}
//       >
//         <div
//           className={`relative ${
//             isEnlarge ? 'w-full h-full' : 'w-full h-[60vh]'
//           } bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out transform ${
//             isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
//           }`}
//         >
//           <div className="h-12 bg-gradient-to-r from-gray-300 to-gray-100 flex items-center px-4 text-lg font-semibold text-gray-800">
//             <div className="flex space-x-2">
//               <div
//                 className="w-3.5 h-3.5 rounded-full bg-red-500 cursor-pointer"
//                 onClick={closeWindow}
//               ></div>
//               <div className="w-4 h-4 rounded-full bg-yellow-500" />
//               <div
//                 className="w-4 h-4 rounded-full bg-green-500 cursor-pointer"
//                 onClick={enlargeWindow}
//               />
//             </div>
//             <div className="text-center w-full">CV</div>
//           </div>

//           <div className="p-4 space-y-4 overflow-auto h-full">
//             <div className="flex space-x-3 mx-5">
//               <div onClick={openCV}>
//                 <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
//                   <div className="pink-file-icon-pic mt-[-20]" />
//                   <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
//                     CV-Johana-GAGA-FR-2025.pdf
//                   </span>
//                 </div>
//               </div>

//               <a
//                 href="./folder-content/CV/CV-portfolio-EN-GABA.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <div className="flex-cols h-20 w-30 cursor-pointer hover:opacity-70 transition-opacity duration-200">
//                   <div className="pink-file-icon-pic mt-[-20]" />
//                   <span className="items-center justify-center ml-[-10] mt-[-30] flex text-center text-black text-sm">
//                     CV-Johana-GABA-EN-2025.pdf
//                   </span>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {isCVOpen && (
//         <div className="fixed flex items-center justify-center">
//           <LazyAppPdfViewer
//             fileUrl="/folder-content/CV/CV-portfolio-FR-GABA.pdf"
//             onClose={() => setIsCVOpen(false)}
//             providerProps={{
//               src: "/folder-content/CV/CV-portfolio-FR-GABA.pdf",
//             }}
//             defaultLayoutProps={{
//               style: { width: "80%", height: "90%" },
//             }}
//           />
//         </div>
//       )}
//     </>
//   );
// }