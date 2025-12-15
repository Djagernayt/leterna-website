import fs from 'fs';
import path from 'path';

// Функция для получения всех изображений из папки проекта
export function getProjectImages(projectSlug: string): string[] {
  const normalPath = path.join(process.cwd(), 'public', 'images', 'by-project', projectSlug, 'normal');
  const enhancedPath = path.join(process.cwd(), 'public', 'images', 'by-project', projectSlug, 'enhanced');
  
  // Пробуем сначала enhanced, потом normal, потом прямо в папке проекта
  let targetPath = normalPath;
  if (fs.existsSync(enhancedPath)) {
    targetPath = enhancedPath;
  } else if (!fs.existsSync(normalPath)) {
    targetPath = path.join(process.cwd(), 'public', 'images', 'by-project', projectSlug);
  }

  if (!fs.existsSync(targetPath)) {
    return [];
  }

  const files = fs.readdirSync(targetPath)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort()
    .map(file => `/images/by-project/${projectSlug}/${fs.existsSync(enhancedPath) ? 'enhanced' : fs.existsSync(normalPath) ? 'normal' : ''}/${file}`.replace('//', '/'));

  return files;
}

// Функция для получения изображений по категории продукта
export function getProductImages(productSlug: string, limit?: number): string[] {
  const productPath = path.join(process.cwd(), 'public', 'images', 'by-product', productSlug);
  
  if (!fs.existsSync(productPath)) {
    return [];
  }

  const allImages: string[] = [];
  const projectFolders = fs.readdirSync(productPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory());

  for (const folder of projectFolders) {
    const folderPath = path.join(productPath, folder.name);
    const files = fs.readdirSync(folderPath)
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .sort()
      .slice(0, 2) // Берем первые 2 изображения из каждого проекта
      .map(file => `/images/by-product/${productSlug}/${folder.name}/${file}`);
    
    allImages.push(...files);
  }

  return limit ? allImages.slice(0, limit) : allImages;
}

// Функция для получения первого изображения (cover) проекта
export function getProjectCover(projectSlug: string): string {
  const images = getProjectImages(projectSlug);
  return images.length > 0 ? images[0] : '/images/placeholder.jpg';
}
