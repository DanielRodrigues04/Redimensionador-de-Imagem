import React, { useState, useRef } from 'react';
import { ResizeHandle } from './ResizeHandle';
import { ImageDownloader } from './ImageDownloader';
import { useImageResize } from '../hooks/useImageResize';
import type { ImageDimensions } from '../types/image';

interface ImageResizerProps {
  imageUrl: string;
  initialDimensions: ImageDimensions;
}

export function ImageResizer({ imageUrl, initialDimensions }: ImageResizerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<ImageDimensions>(initialDimensions);
  const { handleResize } = useImageResize(containerRef, setDimensions);

  return (
    <div className="relative" ref={containerRef}>
      <div className="bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADdJREFUOI1jZGBgYGBgYPjPgBf8x6cmMZGxrKyMEZ8BpAJGNAP+4zEQwwBsAF/AMBLxJ47YBgAoZwwTNnrZEQAAAABJRU5ErkJggg==')] rounded-lg overflow-hidden">
        <div
          className="relative border-2 border-blue-400/30 rounded-lg overflow-hidden backdrop-blur-sm
            transition-all duration-300 hover:border-blue-400"
          style={{ width: dimensions.width, height: dimensions.height }}
        >
          <img
            src={imageUrl}
            alt="Imagem redimensionável"
            className="w-full h-full object-cover"
          />
          <ResizeHandle position="top-left" onResize={(e) => handleResize(e, 'top-left')} />
          <ResizeHandle position="top-right" onResize={(e) => handleResize(e, 'top-right')} />
          <ResizeHandle position="bottom-left" onResize={(e) => handleResize(e, 'bottom-left')} />
          <ResizeHandle position="bottom-right" onResize={(e) => handleResize(e, 'bottom-right')} />
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center gap-6">
        <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
          <p className="text-gray-700 font-medium">
            Dimensões: <span className="text-blue-600">{dimensions.width}px × {dimensions.height}px</span>
          </p>
        </div>
        <ImageDownloader imageUrl={imageUrl} dimensions={dimensions} />
      </div>
    </div>
  );
}