import { Col, Row } from 'reactstrap';
import styles from './index.module.scss';

interface ProjectsImagesProps {
  images: string[];
}

const ProjectsImages = ({ images }: ProjectsImagesProps) => {
  return (
    <div>
      <Row className='gy-4 justify-content-center'>
        {images[0] && (
          <Col lg='8' md='6'>
            <div
              className={styles.imgWrapper}
              data-aos='zoom-in'
              data-aos-delay='150'
            >
              <img
                loading='lazy'
                className='img-full img-bg'
                src={images[0]}
                alt='المشروع الأول'
              />
            </div>
          </Col>
        )}

        {images[1] && (
          <Col lg='4' md='6'>
            <div
              data-aos='zoom-in'
              data-aos-delay='150'
              className={styles.imgWrapper}
            >
              <img
                loading='lazy'
                className='img-full img-bg'
                src={images[1]}
                alt='المشروع الأول'
              />
            </div>
          </Col>
        )}

        <Col lg='8'>
          <Row className='gy-4'>
            {images[2] && (
              <Col lg='7' md='6'>
                <div
                  data-aos='zoom-in'
                  data-aos-delay='150'
                  className={styles.imgWrapper2}
                >
                  <img
                    loading='lazy'
                    className='img-full img-bg'
                    src={images[2]}
                    alt='المشروع الأول'
                  />
                </div>
              </Col>
            )}
            {images[3] && (
              <Col lg='5' md='6' data-aos='zoom-in' data-aos-delay='150'>
                <div className={styles.imgWrapper2}>
                  <img
                    loading='lazy'
                    className='img-full img-bg'
                    src={images[3]}
                    alt='المشروع الأول'
                  />
                </div>
              </Col>
            )}
          </Row>
        </Col>
        {images[4] && (
          <Col lg='4' md='6'>
            <div
              data-aos='zoom-in'
              data-aos-delay='150'
              className={styles.imgWrapper2}
            >
              <img
                loading='lazy'
                className='img-full img-bg'
                src={images[4]}
                alt='المشروع الأول'
              />
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default ProjectsImages;
