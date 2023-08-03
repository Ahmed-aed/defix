import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { DetailsModal, ProjectsSection, Services } from '../../components';
import PageWrapper from '../../components/page-wrapper';
import { ServicesHero } from './components';
import { getValueByLang, importImageByProcessEnv } from '../../utils';
import styles from './index.module.scss';
import { useCallApi, useModalState } from '../../hooks';
import { IServiceItem, IServiceDetails } from '../../models/services';
import { manualTranslatedItems, ROUTES } from '../../constants';

interface TitleConstructions {
  titleConstructionsAr: string;
  titleConstructionsEn: string;
  descriptionConstructionsAr: string;
  descriptionConstructionsEn: string;
  constructionsImage: string;
}
const Service = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()

  const [modalData, setModalData] = useState<IServiceItem>();
  const { data, isLoading } = useCallApi<IServiceDetails>('/service');
  const { data: constructions, isLoading: loadingConstructions } =
    useCallApi<TitleConstructions>('/constructions');
  const { isOpen, toggleModal, openModal } = useModalState();
  const [activeTab, setActiveTab] = useState<number>();

  useEffect(() => {
    if (searchParams.get('selectedTab')) {
      setActiveTab(parseInt(searchParams.get('selectedTab')));
    }
  }, []);

  const handleSelectTab = (tabId: number) => {
    setActiveTab(tabId);
    setSearchParams({ selectedTab: String(tabId) });
  };

  const handleMoreBtnClick = (itemData: IServiceItem) => {
    if (itemData.business_id === 1) {

      setModalData(itemData);
      openModal();
    }
    else {
      navigate(`${ROUTES.services}/${itemData.id}`)
    }


  };
  searchParams.get('selectedTab')

  return (
    <PageWrapper loading={isLoading || loadingConstructions}>
      {activeTab === 1 && (
        <ServicesHero
          imgLink={constructions?.constructionsImage}
          title={getValueByLang(
            constructions?.titleConstructionsAr,
            constructions?.titleConstructionsEn
          )}
          desc={getValueByLang(
            constructions?.descriptionConstructionsAr,
            constructions?.descriptionConstructionsEn
          )}
        />
      )}

      <Services
        withDetailsBtn
        serviceData={{
          services: data?.business,
          TitleOurServicesAr: data?.titleOurServicesAr,
          TitleOurServicesEn: data?.titleOurServicesEn,
          descriptionOurServicesAr: data?.descriptionOurServicesAr,
          descriptionOurServicesEn: data?.descriptionOurServicesEn,
        }}
        setSelectedTab={tabId => handleSelectTab(tabId)}
        withMoreBtn={false}
        selectedTab={activeTab}
        onDetailsBtnClick={handleMoreBtnClick}
      />
      <>
        <h2
          data-aos='fade-up'
          data-aos-delay='150'
          className={styles.projectTitle}
        >
          {
            getValueByLang(manualTranslatedItems?.showProject?.ar, manualTranslatedItems?.showProject?.en)}        </h2>

        <ProjectsSection imgDataProp={data?.business} isLoading={isLoading} className={styles.projectsSectionWrap} />
      </>

      <DetailsModal
        onClosed={() => setModalData(undefined)}
        withIcon
        data={{
          title: getValueByLang(modalData?.title_ar, modalData?.title_en),
          desc: getValueByLang(
            modalData?.description_inside_details_ar,
            modalData?.description_inside_details_en
          ),
          imgLink: modalData?.image,
          iconLink: modalData?.icon,
        }}
        isOpen={isOpen}
        toggleModal={toggleModal}
      />
    </PageWrapper>
  );
};

export default Service;
