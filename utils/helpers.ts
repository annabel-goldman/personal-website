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
