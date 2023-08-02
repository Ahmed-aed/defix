import { Container } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper';
import { getValueByLang } from '../../../../utils';
import { Button } from '../../../../components';
import { BodySliderData } from '../../../../models';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './index.module.scss';

interface TopBodySliderProps {
  bodyData: BodySliderData;
}
export const Header = ({ bodyData }: TopBodySliderProps) => {
  return (
    <header className={styles.header} id='home'>
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={2500}
        loop
        effect='fade'
        draggable={false}
        navigation={false}
        pagination={false}
        spaceBetween={0}
        modules={[EffectFade, Autoplay]}
        noSwiping={true}
        noSwipingClass='swiper-no-swiping'
      >
        {bodyData?.sliders.map((item) => (
          <SwiperSlide key={item?.id}>
            <div
              className={`${styles.headerItem} bg-cover`}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <Container>
                <div className={styles.headerItemContent}>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h1 data-aos='fade-up' data-aos-delay='150'>
                        {getValueByLang(
                          bodyData?.titleSliderAr,
                          bodyData?.titleSliderEn
                        )}
                      </h1>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-lg-7'>
                      <p data-aos='fade-up' data-aos-delay='200'>
                        {getValueByLang(
                          bodyData?.sliderTextAr,
                          bodyData?.sliderTextEn
                        )}
                      </p>
                    </div>
                  </div>

                  <div
                    className={styles.headerItemCtaWrap}
                    data-aos='fade-up'
                    data-aos-delay='250'
                  >
                    <a
                      href={getValueByLang(bodyData?.cvAr, bodyData?.cvEn)}
                      target='_blank'
                    >
                      <Button type='primary'>
                        {getValueByLang(
                          bodyData?.TitleCvAr,
                          bodyData?.TitleCvEn
                        )}
                      </Button>
                    </a>
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};
