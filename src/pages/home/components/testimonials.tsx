import { Col, Container, Row } from 'reactstrap';
import { QuotsIcon, SectionsTitle, SectionsWrapper } from '../../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import styles from '../index.module.scss';
import { getValueByLang } from '../../../utils';
import { BodySliderData } from '../../../models';

interface TestimonialsProps {
  data: BodySliderData;
}

export const Testimonials = ({ data }: TestimonialsProps) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + '</div>';
    },
  };
  return (
    <SectionsWrapper id='testimonials' className={styles.testimonialsSection}>
      <Container>
        <Row className='gy-4'>
          <Col lg='4'>
            <SectionsTitle
              className={styles.testimonialsTitle}
              text={getValueByLang(
                data?.titleOurSayAboutUsAr,
                data?.titleOurSayAboutUsEn
              )}
            />
            <p data-aos='fade-up' data-aos-delay='200'>
              {getValueByLang(
                data?.descriptionOurSayAboutUsAr,
                data?.descriptionOurSayAboutUsAr
              )}
            </p>
          </Col>
          <Col lg='8'>
            <div
              className={styles.testimonialsSliderWrapper}
              data-aos='fade-in'
              data-aos-delay='200'
            >
              <Swiper
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                speed={1500}
                loop
                effect='fade'
                draggable={false}
                navigation={false}
                pagination={pagination}
                spaceBetween={15}
                modules={[Autoplay, Pagination]}
              >
                {data?.sayAboutUs?.map(item => (
                  <SwiperSlide key={item?.id}>
                    <div className={styles.testimonialsCard}>
                      <div className={styles.cardHead}>
                        <div className={styles.authordesc}>
                          <div className={styles.icon}>
                            <QuotsIcon />
                          </div>
                          <div>
                            <h5>{item?.name}</h5>
                            <p>{item?.jop_name}</p>
                          </div>
                        </div>
                        <div className={styles.authorImg}>
                          <img
                            loading='lazy'
                            className='img-full img-bg'
                            src={item?.image}
                            alt='photo'
                          />
                        </div>
                      </div>
                      <div className={styles.cardContent}>
                        <p>{item?.message}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionsWrapper>
  );
};
