import { Container } from 'reactstrap';
import styles from './index.module.scss';
import { PagesHeaderShape } from '../icons';
import SectionsTitle from '../sections-title';

interface PagesHeaderProps {
  title: string;
  description: string;
}
const PagesHeader = ({ title, description }: PagesHeaderProps) => {
  return (
    <header className={`${styles.pagesHeader} bg-cover`}>
      <div className={`${styles.pagesHeaderTopShape} header-top-shape`}>
        <PagesHeaderShape />
      </div>
      <div className={`${styles.pagesHeaderBottomShape} header-bottom-shape`}>
        <PagesHeaderShape />
      </div>

      <Container>
        <div className={styles.pagesHeaderContentWrapper}>
          <div>
            <SectionsTitle className='text-center' text={title} />
            <div className='row justify-content-center'>
              <div className='col-xl-10'>
                <p
                  className='text-center'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default PagesHeader;
