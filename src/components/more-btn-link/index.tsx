import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { ArrowLeft } from '../icons';

interface MoreBtnLinkProps {
  link?: string;
  text: string;
  onClick?: () => void;
}

const MoreBtnLink = ({ link, text, onClick }: MoreBtnLinkProps) => {
  return (
    <>
      {link ? (
        <Link to={link} className={`${styles.moreBtnLink} more-btn-link`}>
          <span> {text}</span>
          <ArrowLeft />
        </Link>
      ) : (
        <button onClick={onClick} className={styles.moreBtnLink}>
          <span> {text}</span>
          <ArrowLeft />
        </button>
      )}
    </>
  );
};

export default MoreBtnLink;
