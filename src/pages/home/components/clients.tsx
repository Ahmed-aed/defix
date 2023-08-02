import { Container } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { SectionsTitle, SectionsWrapper } from '../../../components';
import { getValueByLang, importImageByProcessEnv } from '../../../utils';
import styles from '../index.module.scss';
import { BodySliderData } from '../../../models';

interface ClintProps {
  data: BodySliderData;
}

export const Clients = ({ data }: ClintProps) => {
  return (
    <SectionsWrapper id='clients' className={styles.clientsSectionWrapper}>
      <Container>
        <SectionsTitle
          text={getValueByLang(
            data?.TitleOurClientsAr,
            data?.TitleOurClientsEn
          )}
        />
        <div
          data-aos='fade-in'
          data-aos-delay='200'
          className={styles.clientsSliderWrapper}
        >
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            speed={2000}
            freeMode
            slidesPerView={5}
            loop
            pagination={{ enabled: true, clickable: true }}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              450: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay, Pagination]}
          >
            {data?.clients?.map(item => (
              <SwiperSlide key={item?.id}>
                <div className={styles.clientItem}>
                  <img
                    loading='lazy'
                    className='img-full '
                    src={item?.image}
                    alt='client1'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </SectionsWrapper>
  );
};
