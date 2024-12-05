import React, { useState } from 'react';
import { ImageUploader } from './components/ImageUploader';
import { ImageResizer } from './components/ImageResizer';
import { ImageIcon } from 'lucide-react';

export default function App() {
  const [imageUrl, setImageUrl] = useState<string>('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ImageIcon className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Redimensionador de Imagem
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ferramenta profissional para redimensionar suas imagens com precisão. 
            Arraste, solte e ajuste conforme sua necessidade.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {!imageUrl ? (
            <ImageUploader onImageSelect={setImageUrl} />
          ) : (
            <ImageResizer
              imageUrl={imageUrl}
              initialDimensions={{ width: 400, height: 300 }}
            />
          )}
          
          {imageUrl && (
            <button
              onClick={() => setImageUrl('')}
              className="mt-8 px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg 
                hover:bg-gray-200 transition-all duration-200 mx-auto block
                font-medium text-sm"
            >
              Escolher outra imagem
            </button>
          )}
        </div>
      </div>
    </div>
  );
}