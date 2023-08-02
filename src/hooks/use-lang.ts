export const useLang = () => {
  return localStorage.getItem('lang') || 'ar';
};
