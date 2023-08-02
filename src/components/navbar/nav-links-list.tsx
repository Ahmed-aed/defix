import { MouseEvent, useContext, useEffect } from 'react';
import { Link, useLocation, useMatch, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { getValueByLang } from '../../utils';
import Button from '../button';
import styles from './index.module.scss';
import { Menu } from '../icons';
import ChangeLanguage from '../change-language';
import { HeaderData } from '../../models';
import BiLang from '../bi-lang-comp';
import { NavbarContext } from '../../contexts/navbar-context';

interface NavLinksListProps {
  isSideMenu?: boolean;
  isChangeLangPrimary?: boolean;
  onMenuButtonClick?: () => void;
  setSideMenuOpen?: (opened: boolean) => void;
  data?: HeaderData;
  isWhiteBg?: boolean;
}

export const NavLinksList = ({
  isSideMenu = false,
  onMenuButtonClick,
  setSideMenuOpen,
  data,
  isWhiteBg = false,
}: NavLinksListProps) => {
  const navLinks = [
    {
      nameAr: data?.TitleHomeAr,
      nameEn: data?.TitleHomeEn,
      targetSection: 'home',
    },
    {
      nameAr: data?.TitleAboutUsAr,
      nameEn: data?.TitleAboutUsEn,
      targetSection: 'about-us',
    },
    {
      nameAr: data?.TitleOurServicesAr,
      nameEn: data?.TitleOurServicesEn,
      targetSection: 'services',
    },
    {
      nameAr: data?.TitleOurProjectsAr,
      nameEn: data?.TitleOurProjectsEn,
      targetSection: 'projects',
    },
    {
      nameAr: data?.TitleOurClientsAr,
      nameEn: data?.TitleOurClientsEn,
      targetSection: 'clients',
    },
    {
      nameAr: data?.TitleOurAchievementsAr,
      nameEn: data?.TitleOurAchievementsEn,
      targetSection: 'achievement',
    },
  ];
  const location = useLocation();
  const match = useMatch(ROUTES.home);
  const navigate = useNavigate();
  const { activeLinkItem, setActiveLinkItem } = useContext(NavbarContext);

  const closeSideMenu = () => {
    if (setSideMenuOpen) {
      setSideMenuOpen(false);
    }
  };

  useEffect(() => {
    if (location?.pathname && !match) {
      const activeSection = location?.pathname?.split('/')?.[1];
      setActiveLinkItem(!!activeSection ? activeSection : 'home');
    }
  }, [location]);

  const handleNavLinkClick = (event: MouseEvent, targetSectionId: string) => {
    event.preventDefault();
    if (targetSectionId !== activeLinkItem) {
      navigate(`${ROUTES.home}?focusedSection=${targetSectionId}`);
    }
    closeSideMenu();
  };

  return (
    <div
      className={`${styles.navbarWrapper} ${
        isSideMenu ? styles.sideMenuLinksWrapper : ''
      }`}
    >
      <Link
        to={ROUTES.home}
        onClick={closeSideMenu}
        className={styles.navbarBrand}
      >
        <img
          className='img-full'
          alt='ديفكس'
          src={
            isWhiteBg
              ? getValueByLang(data?.darkLogoAr, data?.whiteLogoEn)
              : getValueByLang(data?.darkLogoAr, data?.darkLogoEn)
          }
        />
      </Link>

      <ul className={styles.linksWrapper}>
        {navLinks.map(navLinkItem => (
          <li key={navLinkItem.targetSection}>
            <Link
              onClick={e => handleNavLinkClick(e, navLinkItem.targetSection)}
              to={'#'}
              className={`${
                activeLinkItem === navLinkItem.targetSection
                  ? styles.active
                  : ''
              }`}
            >
              {getValueByLang(navLinkItem.nameAr, navLinkItem.nameEn)}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.changeLangCtaWrap}>
        {!isSideMenu && <ChangeLanguage isPrimary={isWhiteBg} />}
        {!isSideMenu && (
          <button
            className={`${styles.menuToggler} menu-toggler`}
            onClick={onMenuButtonClick}
          >
            <Menu />
          </button>
        )}

        <Link to='#' className={styles.ctaWrap}>
          <Button onClick={closeSideMenu} type='outlined-white' fullRadius>
            <BiLang
              arValue={data?.TitleOurConnectWithUsAr}
              enValue={data?.TitleOurConnectWithUsEn}
            />
          </Button>
        </Link>
      </div>
    </div>
  );
};
