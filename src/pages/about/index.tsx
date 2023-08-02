import { Container } from 'reactstrap';
import {
  ContentWithImageComp,
  PagesHeader,
  SectionsTitle,
  SectionsWrapper,
} from '../../components';
import { getValueByLang } from '../../utils';
import styles from './index.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useCallApi } from '../../hooks';
import { About } from '../../models';
import PageWrapper from '../../components/page-wrapper';

const AboutUs = () => {
  // const [searchParams] = useSearchParams();
  const { data, isLoading } = useCallApi<About>('/about');
  //TODO :needed if we need to go to specific section

  return (
    <PageWrapper loading={isLoading}>
      <PagesHeader
        title={getValueByLang(data?.titleAboutUsAr, data?.titleAboutUsEn)}
        description={getValueByLang(
          data?.descriptionAboutUsAr,
          data?.descriptionAboutUsEn
        )}
      />
      <SectionsWrapper className={styles.sectionItem} id='why-defix'>
        <Container>
          <div className={styles.aboutTopSection}>
            <SectionsTitle
              text={getValueByLang(
                data?.whyDiffixEn?.titleWhyDiffixAr,
                data?.whyDiffixEn?.titleWhyDiffixEn
              )}
            />
            <p data-aos-delay='200' data-aos='fade-up'>
              {getValueByLang(
                data?.whyDiffixEn?.descriptionWhyDiffixAr,
                data?.whyDiffixEn?.descriptionWhyDiffixEn
              )}
            </p>
          </div>
          {data?.whyDiffixEn?.aboutWhyDiffix?.map((item, index) => (
            <ContentWithImageComp
              key={index}
              index={index}
              description={getValueByLang(
                item?.description_ar,
                item?.description_en
              )}
              imgLink={item?.image}
              title={getValueByLang(item?.title_ar, item?.title_en)}
            />
          ))}
        </Container>
      </SectionsWrapper>

      <SectionsWrapper className={styles.sectionItem} id='vision'>
        <Container>
          <div className={styles.aboutTopSection}>
            <SectionsTitle
              text={getValueByLang(
                data?.vision?.titleVisionAr,
                data?.vision?.titleVisionEn
              )}
            />

            <p data-aos-delay='200' data-aos='fade-up'>
              {getValueByLang(
                data?.vision?.descriptionVisionAr,
                data?.vision?.descriptionVisionEn
              )}
            </p>
          </div>
          {data?.vision?.aboutVision?.map((item, index) => (
            <ContentWithImageComp
              key={index}
              index={index}
              description={getValueByLang(
                item?.description_ar,
                item?.description_en
              )}
              imgLink={item?.image}
              title={getValueByLang(item?.title_ar, item?.title_en)}
            />
          ))}
        </Container>
      </SectionsWrapper>

      <SectionsWrapper id='goals' className={styles.sectionItem}>
        <Container>
          <div className={styles.aboutTopSection}>
            <SectionsTitle
              text={getValueByLang(
                data?.goals?.titleGoalsAr,
                data?.goals?.titleGoalsEn
              )}
            />

            <p data-aos-delay='200' data-aos='fade-up'>
              {getValueByLang(
                data?.goals?.descriptionGoalsAr,
                data?.goals?.descriptionGoalsEn
              )}
            </p>
          </div>
          {data?.goals?.aboutGoals?.map((item, index) => (
            <ContentWithImageComp
              key={index}
              index={index}
              description={getValueByLang(
                item?.description_ar,
                item?.description_en
              )}
              imgLink={item.image}
              title={getValueByLang(item?.title_ar, item?.title_en)}
            />
          ))}
        </Container>
      </SectionsWrapper>
      <SectionsWrapper id='commitments' className={styles.sectionItem}>
        <Container>
          <div className={styles.aboutTopSection}>
            <SectionsTitle
              text={getValueByLang(
                data?.commitment?.titleCommitmentAr,
                data?.commitment?.titleCommitmentEn
              )}
            />

            <p data-aos-delay='200' data-aos='fade-up'>
              {getValueByLang(
                data?.commitment?.descriptionCommitmentAr,
                data?.commitment?.descriptionCommitmentEn
              )}
            </p>
          </div>
          {data?.commitment?.aboutCommitment?.map((item, index) => (
            <ContentWithImageComp
              key={index}
              index={index}
              description={getValueByLang(
                item?.description_ar,
                item?.description_en
              )}
              imgLink={item?.image}
              title={getValueByLang(item?.title_ar, item?.title_en)}
            />
          ))}
        </Container>
      </SectionsWrapper>
    </PageWrapper>
  );
};

export default AboutUs;
