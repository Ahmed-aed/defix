import { HeaderData } from '../../models';
import { NavLinksList } from './nav-links-list';
import styles from './index.module.scss';

interface SideMenuProps {
  opened: boolean;
  setSideMenuOpen?: (opened: boolean) => void;
  data?: HeaderData;
}
export const SideMenu = ({ opened, setSideMenuOpen,data }: SideMenuProps) => {
  return (
    <aside className={`${styles.sideMenu} ${opened ? styles.opened : ''}`}>
      <NavLinksList  data={data} isSideMenu setSideMenuOpen={setSideMenuOpen} />
    </aside>
  );
};
