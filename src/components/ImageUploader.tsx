import React, { useCallback } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  onImageSelect: (url: string) => void;
}

export function ImageUploader({ onImageSelect }: ImageUploaderProps) {
  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      onImageSelect(url);
    }
  }, [onImageSelect]);

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      onImageSelect(url);
    }
  }, [onImageSelect]);

  return (
    <div
      className="border-2 border-dashed border-blue-200 rounded-xl p-12
        hover:border-blue-400 transition-all duration-300 cursor-pointer
        bg-gradient-to-br from-blue-50/50 to-indigo-50/50"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileSelect}
        id="imageInput"
      />
      <label htmlFor="imageInput" className="cursor-pointer">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="absolute -right-2 -top-2">
              <Upload className="w-6 h-6 text-blue-500" />
            </div>
            <ImageIcon className="w-16 h-16 text-blue-400" />
          </div>
          <div className="text-center">
            <p className="text-gray-700 text-lg font-medium mb-2">
              Arraste e solte sua imagem aqui
            </p>
            <p className="text-gray-500">
              ou <span className="text-blue-500 hover:text-blue-600">clique para selecionar</span>
            </p>
          </div>
          <p className="text-gray-400 text-sm">
            Formatos suportados: PNG, JPEG, WebP
          </p>
        </div>
      </label>
    </div>
  );
}