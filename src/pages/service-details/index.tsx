import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import {
  ContentWithImageComp,
  PagesHeader,
  PageWrapper,
  SectionsTitle,
} from '../../components';
import { apiEndPoints, manualTranslatedItems } from '../../constants';
import { useCallApi } from '../../hooks';
import { ApiEndPointsValues } from '../../models';
import { IMaintenance } from '../../models/mantinenc';
import { getValueByLang } from '../../utils';
import styles from './index.module.scss';


const ServiceDetails = () => {
  const { id } = useParams()
  const { data, isLoading } = useCallApi<IMaintenance>(apiEndPoints.serviceDetails(id) as ApiEndPointsValues);


  return (
    <PageWrapper loading={isLoading}>

      <PagesHeader
        title={getValueByLang(data?.titleAr, data?.titleEn)}
        description={getValueByLang(data?.descriptionAr, data?.descriptionEr)}
      />
      <div className={styles.servicesWrap}>
        <Container>
          {data?.serviceDetails?.map((item, index) => (
            <ContentWithImageComp
              key={index}
              index={index}
              description={getValueByLang(item.description_ar, item.description_en)}
              imgLink={item.image}
              title={getValueByLang(item.title_ar, item.title_en)}
            />
          ))}
          <div className={styles.whyChooseUs}>
            <SectionsTitle text={getValueByLang(manualTranslatedItems.whyChooseUs.ar, manualTranslatedItems.whyChooseUs.en)} />
            <ul data-aos-delay='200' data-aos='fade-up'>
              {data?.whyChooseUs?.map((item) =>
                <li key={item.id}>
                  {
                    getValueByLang(item?.description_ar, item?.description_en)
                  }
                </li>
              )}

            </ul>
          </div>
        </Container>
      </div>
    </PageWrapper>
  );
};

export default ServiceDetails;
