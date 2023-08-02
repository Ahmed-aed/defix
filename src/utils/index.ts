export const importImageByProcessEnv = (imgName: string) => {
  return `${process.env.PUBLIC_URL}/assets/images/${imgName}`;
};

export const getValueByLang = (arVal: any, enVal: any) => {
  const currentLang = localStorage.getItem('lang') || 'ar'
  return currentLang === 'ar' ? arVal : enVal
}