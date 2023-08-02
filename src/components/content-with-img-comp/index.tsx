import { Col, Container, Row } from 'reactstrap';
import styles from './index.module.scss';
import { useLang } from '../../hooks';

interface ContentWithImageCompProps {
  title: string;
  description: string;
  imgLink: string;
  index: number;
}
const ContentWithImageComp = ({
  title,
  description,
  imgLink,
  index,
}: ContentWithImageCompProps) => {
  const currentLanguage = useLang();
  const getAnimationType = (isContent: boolean = false) => {
    if ((index % 2 === 0 && !isContent) || (isContent && index % 2 !== 0)) {
      return currentLanguage === 'ar' ? 'fade-right' : 'fade-left';
    } else {
      return currentLanguage === 'ar' ? 'fade-left' : 'fade-right';
    }
  };
  return (
    <div className={styles.contentWithImageCompWrap}>
      <Row
        className='gy-4'
        style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
      >
        <Col xl='7' lg='6'>
          <div
            className={styles.content}
            data-aos={getAnimationType(true)}
            data-aos-delay='150'
          >
            <h4>{`${index + 1}.${title}:`}</h4>
            <Row>
              <Col xl='10'>
                <p>{description}</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl='5' lg='6'>
          <div
            className={styles.image}
            data-aos={getAnimationType()}
            data-aos-delay='150'
          >
            <img
              src={imgLink}
              className='img-bg img-full'
              alt={title}
              title={title}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContentWithImageComp;
