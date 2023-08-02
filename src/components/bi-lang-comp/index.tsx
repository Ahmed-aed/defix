import { useLang } from '../../hooks';

interface BiLangProps {
  arValue: string;
  enValue: string;
}

const BiLang = ({ arValue, enValue }: BiLangProps) => {
  const currentLanguage = useLang();
  return <>{currentLanguage === 'ar' ? arValue : enValue}</>;
};

export default BiLang;
