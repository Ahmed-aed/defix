import { manualTranslatedItems } from '../../constants';
import { getValueByLang } from '../../utils';
import MoreBtnLink from '../more-btn-link';
import styles from './index.module.scss';

interface WebsiteCardProps {
  title: string;
  text: string;
  iconLink: string;
  iconHaveBg?: boolean;
  hovered?: boolean;
  onMoreBtnClick?: () => void;
  withDetailsBtn?: boolean;
}

const WebsiteCard = ({
  title,
  text,
  iconLink,
  iconHaveBg,
  hovered,
  onMoreBtnClick,
  withDetailsBtn = false,
}: WebsiteCardProps) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-delay='150'
      className={`${styles.websiteCard} ${hovered ? styles.hovered : ''}`}
    >
      <div className={styles.cardIconTitleWrap}>
        <div className={`${styles.icon} ${iconHaveBg ? styles.withBg : ''}`}>
          <img
            loading='lazy'
            className='img-full'
            src={iconLink}
            title={title}
            alt={title}
          />
        </div>
        <h5>{title}</h5>
      </div>
      <p>{text}</p>
      <>
        {withDetailsBtn && (
          <>

            {onMoreBtnClick && (
              <MoreBtnLink onClick={onMoreBtnClick} text={getValueByLang(manualTranslatedItems?.showDetails?.ar, manualTranslatedItems?.showDetails?.en)} />
            )}
          </>
        )}
      </>
    </div>
  );
};

export default WebsiteCard;
