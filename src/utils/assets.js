// Helper to get base URL for assets
export const getAssetUrl = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path}`.replace(/\/+/g, '/');
};
