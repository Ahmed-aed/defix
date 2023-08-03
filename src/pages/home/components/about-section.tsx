import { Col, Container, Row } from 'reactstrap';
import {
  Button,
  SectionsTitle,
  SectionsWrapper,
  WebsiteCard,
} from '../../../components';
import { BodySliderData } from '../../../models';
import styles from '../index.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { manualTranslatedItems, ROUTES } from '../../../constants';
import { getValueByLang } from '../../../utils';

interface AboutSectionProps {
  aboutSection: BodySliderData;
  withMoreBtn: boolean
}

export const AboutSection = ({ aboutSection, withMoreBtn }: AboutSectionProps) => {
  const navigate = useNavigate();

  return (
    <SectionsWrapper id='about-us'>
      <Container>
        <SectionsTitle
          text={getValueByLang(
            aboutSection?.TitleAboutUsAr,
            aboutSection?.TitleAboutUsEr
          )}
        />
        <div className={styles.aboutCardsWrapper}>
          <Row className='gy-4'>
            {aboutSection?.aboutHome?.map(item => (
              <Col xl='4' lg='6' key={item.id}>
                <WebsiteCard
                  hovered
                  iconLink={item.image}
                  title={item.title_ar}
                  text={item.description_ar}
                />
              </Col>
            ))}
          </Row>
          {withMoreBtn && (
            <div
              className={styles.moreBtnWrap}
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <Button
                onClick={() =>
                  navigate(`${ROUTES.aboutUs}`)
                }
                whiteText
                type='primary'
                fullRadius
              >
                {getValueByLang(
                  manualTranslatedItems?.showMore?.ar,
                  manualTranslatedItems?.showMore?.en
                )}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </SectionsWrapper>
  );
};
