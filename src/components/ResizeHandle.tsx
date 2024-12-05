import React from 'react';
import type { ResizeHandleProps } from '../types/image';

const positionClasses = {
  'top-left': 'top-0 left-0 cursor-nw-resize',
  'top-right': 'top-0 right-0 cursor-ne-resize',
  'bottom-left': 'bottom-0 left-0 cursor-sw-resize',
  'bottom-right': 'bottom-0 right-0 cursor-se-resize',
};

export function ResizeHandle({ position, onResize }: ResizeHandleProps) {
  return (
    <div
      className={`absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full 
        flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2
        hover:scale-110 transition-transform duration-200 shadow-lg
        ${positionClasses[position]}`}
      onMouseDown={onResize}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
    </div>
  );
}