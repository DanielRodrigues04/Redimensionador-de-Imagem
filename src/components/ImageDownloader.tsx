import React, { useState } from 'react';
import { Download, FileType } from 'lucide-react';
import { convertImageToFormat } from '../utils/imageConverter';
import type { ImageDimensions } from '../types/image';

interface ImageDownloaderProps {
  imageUrl: string;
  dimensions: ImageDimensions;
}

export function ImageDownloader({ imageUrl, dimensions }: ImageDownloaderProps) {
  const [format, setFormat] = useState('png');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDownload = async () => {
    try {
      setIsProcessing(true);
      const dataUrl = await convertImageToFormat(
        imageUrl,
        format,
        dimensions.width,
        dimensions.height
      );

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `imagem-redimensionada.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erro ao converter imagem:', error);
      alert('Erro ao processar o download da imagem');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="relative">
        <FileType className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            appearance-none cursor-pointer min-w-[120px]
            text-gray-700 font-medium"
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WebP</option>
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      <button
        onClick={handleDownload}
        disabled={isProcessing}
        className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg
          hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 
          disabled:cursor-not-allowed font-medium min-w-[180px] justify-center
          shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
      >
        <Download className="w-5 h-5" />
        {isProcessing ? 'Processando...' : 'Baixar Imagem'}
      </button>
    </div>
  );
}