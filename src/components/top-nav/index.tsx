import { Container } from 'reactstrap';
import { HeaderData } from '../../models';
import BiLang from '../bi-lang-comp';
import { MailIcon, WhatsappIcon } from '../icons';
import styles from './index.module.scss';

interface TopNavProps {
  headerData: HeaderData;
}
const TopNav = ({ headerData }: TopNavProps) => {
  return (
    <div className={styles.topNavWrapper}>
      <Container>
        <div className={styles.topNavInnerWrapper}>
          <div className={styles.topNavOpenDays}>
            <p>
              <span>
                <BiLang
                  arValue={headerData?.TimesOfWorkAr}
                  enValue={headerData?.TimesOfWorkEn}
                />
              </span>
            </p>
          </div>
          <ul className={styles.topNavContact}>
            <li>
              <a
                href={`https://api.whatsapp.com/send/?phone=${headerData?.whatsApp}`}
                target='_blank'
              >
                <span>
                  <WhatsappIcon />
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${headerData?.email}`} target='_blank'>
                <span>
                  <MailIcon />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
