export interface ImageDimensions {
  width: number;
  height: number;
}

export interface ResizeHandleProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  onResize: (event: React.MouseEvent) => void;
}