/**
 * Utility functions
 * Common operations and helpers used throughout the application
 */

/**
 * Handles file download functionality
 * @param filePath - Path to the file to download
 * @param downloadName - Name for the downloaded file
 */
export const downloadFile = (filePath: string, downloadName: string): void => {
  const link = document.createElement('a');
  link.href = filePath;
  link.download = downloadName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Handles image loading errors with console logging
 * @param imagePath - Path of the image that failed to load
 * @param element - The image element that failed
 */
export const handleImageError = (imagePath: string, element: HTMLImageElement): void => {
  console.error(`Failed to load image: ${imagePath}`);
  element.style.display = 'none';
};

/**
 * Handles successful image loading with console logging
 * @param imagePath - Path of the image that loaded successfully
 */
export const handleImageLoad = (imagePath: string): void => {
  console.log(`Successfully loaded image: ${imagePath}`);
};

/**
 * Creates a delay using Promise
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after the specified delay
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Checks if a pathname starts with a given path (useful for navigation)
 * @param pathname - Current pathname
 * @param path - Path to check against
 * @returns Boolean indicating if pathname starts with path
 */
export const isActivePath = (pathname: string, path: string): boolean => {
  if (path === '/') {
    return pathname === '/';
  }
  return pathname.startsWith(path);
};

/**
 * Creates a className string based on conditions
 * @param baseClasses - Base CSS classes
 * @param conditionalClasses - Object with condition as key and classes as value
 * @returns Combined className string
 */
export const createClassName = (
  baseClasses: string,
  conditionalClasses: Record<string, string | boolean>
): string => {
  const classes = [baseClasses];
  
  Object.entries(conditionalClasses).forEach(([condition, classValue]) => {
    if (condition && typeof classValue === 'string') {
      classes.push(classValue);
    }
  });
  
  return classes.join(' ');
}; 