export async function convertImageToFormat(
  imageUrl: string,
  format: string,
  width: number,
  height: number
): Promise<string> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();

  return new Promise((resolve, reject) => {
    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL(`image/${format}`));
      } else {
        reject(new Error('Não foi possível criar o contexto do canvas'));
      }
    };

    img.onerror = () => {
      reject(new Error('Erro ao carregar a imagem'));
    };

    img.src = imageUrl;
  });
}