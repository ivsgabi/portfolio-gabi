import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  lines: string[];
}

const TypingEffect: React.FC<TypingEffectProps> = ({ lines }) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [charIndex, setCharIndex] = useState<number>(0);
  const [showCursor, setShowCursor] = useState<boolean>(true);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      if (charIndex < lines[currentLineIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + lines[currentLineIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 100); 
        return () => clearTimeout(timeout);
      } else {
        setDisplayedLines((prev) => [...prev, currentText]);
        setCurrentText("");
        setCharIndex(0);
        setCurrentLineIndex(currentLineIndex + 1);
      }
    } else {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [charIndex, currentLineIndex, lines, currentText]);

  return (
    <div className="text-gray-700 text-7xl font-mono leading-tight">
      {displayedLines.map((line, index) => (
        <div key={index}>
          <span>{"> "}{line}</span>
        </div>
      ))}
      {currentLineIndex < lines.length && (
        <div>
          <span>{"> "}{currentText}</span>
          <span className={`${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
        </div>
      )}
    </div>
  );
};

interface TypingEffectComponentProps {
  inputs: string[];
}

const TypingEffectComponent: React.FC<TypingEffectComponentProps> = ({ inputs }) => {
  return <TypingEffect lines={inputs} />;
};

export default TypingEffectComponent;
