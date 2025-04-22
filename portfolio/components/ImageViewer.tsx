'use client';
import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface ImageViewerProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ImageViewer({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: ImageViewerProps) {
  return (
    <Lightbox
      mainSrc={images[currentIndex]}
      nextSrc={images[(currentIndex + 1) % images.length]}
      prevSrc={images[(currentIndex + images.length - 1) % images.length]}
      onCloseRequest={onClose}
      onMovePrevRequest={onPrev}
      onMoveNextRequest={onNext}
    />
  );
}
