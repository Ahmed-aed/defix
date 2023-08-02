import { Col, Container, Row } from 'reactstrap';
import {
  SectionsTitle,
  SectionsWrapper,
  WebsiteCard,
} from '../../../components';
import { BodySliderData } from '../../../models';
import styles from '../index.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import { getValueByLang } from '../../../utils';

interface AboutSectionProps {
  aboutSection: BodySliderData;
}

export const AboutSection = ({ aboutSection }: AboutSectionProps) => {
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
                <Link to={`${ROUTES.aboutUs}`}>
                  <WebsiteCard
                    hovered
                    iconLink={item.image}
                    title={item.title_ar}
                    text={item.description_ar}
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </SectionsWrapper>
  );
};
