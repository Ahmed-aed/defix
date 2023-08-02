import { useState } from 'react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { LangIcon } from '../icons';
import styles from './index.module.scss';
import { useLang } from '../../hooks';

interface ChangeLanguageProps {
  isPrimary?: boolean;
}

const ChangeLanguage = ({ isPrimary = false }: ChangeLanguageProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const currentLanguage = useLang();

  const handleLanguageClick = (lang: 'ar' | 'en') => {
    localStorage.setItem('lang', lang);
    window.location.reload();
  };
  return (
    <UncontrolledDropdown
      className={`${isPrimary ? styles.changeLangPrimary : ''} ${
        styles.changeLang
      }`}
      isOpen={dropdownOpen}
      toggle={toggle}
      direction='down'
    >
      <DropdownToggle>
        <span>{currentLanguage === 'ar' ? 'عربي' : 'English'}</span>
        <LangIcon />
      </DropdownToggle>
      <DropdownMenu className={styles.dropdownMenu}>
        <DropdownItem
          onClick={() => handleLanguageClick('ar')}
          disabled={currentLanguage === 'ar'}
          className={styles.dropdownMenuItem}
        >
          عربي
        </DropdownItem>
        <DropdownItem
          disabled={currentLanguage === 'en'}
          onClick={() => handleLanguageClick('en')}
          className={styles.dropdownMenuItem}
        >
          English
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default ChangeLanguage;
