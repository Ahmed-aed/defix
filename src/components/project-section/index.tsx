import { Container } from 'reactstrap';
import ProjectsImages from '../projects-images';
import { getValueByLang } from '../../utils';
import SectionsWrapper from '../sections-wrapper';
import SectionsTitle from '../sections-title';
import Button from '../button';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTES, manualTranslatedItems } from '../../constants';
import styles from './index.module.scss';
import Subtext from '../subtext';
import { BodySliderData, ProjectsHome } from '../../models';
import Tabs from '../tabs';
import { useEffect, useState } from 'react';
import { IService } from '../../models/services';
import PageWrapper from '../page-wrapper';

interface ProjectsSectionProps {
  withMoreBtn?: boolean;
  title?: string;
  subTitle?: string;
  className?: string;
  data?: BodySliderData;
  imgDataProp?: IService[];
  isLoading?: boolean
}

const ProjectsImagesComp = ({ imagData }: { imagData: any[] }) => {
  return <ProjectsImages images={imagData?.map(item => item?.master_image)} />;
};

const ProjectsSection = ({
  withMoreBtn = true,
  title,
  subTitle,
  className,
  data,
  imgDataProp,
  isLoading
}: ProjectsSectionProps) => {


  const [activeTab, setActiveTab] = useState<number>();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const finalData = imgDataProp ? imgDataProp[parseInt(searchParams.get('selectedTab')) - 1].projects_home : []

  const projectParams = location?.pathname === '/services' ? parseInt(searchParams.get('selectedTab')) : activeTab



  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      setActiveTab(data?.[0]?.id ?? 1);
    }

  }, [data, imgDataProp]);
  return (
    <PageWrapper loading={isLoading}>
      <SectionsWrapper
        id='projects'
        className={`${styles.projectsSection} ${className}`}
      >
        <Container>
          {title && <SectionsTitle text={title} />}
          {subTitle && <Subtext text={subTitle} />}
          {
            location?.pathname === '/services' ? (
              <ProjectsImagesComp imagData={finalData ?? []} />
            ) : (
              <div
                className={styles.projectsTabs}
                data-aos='fade-up'
                data-aos-delay='250'
              >
                <Tabs
                  activeTab={activeTab}
                  setSelectedTab={setActiveTab}
                  tabs={
                    data?.businesprojectsHome?.map(item => ({
                      id: item.id,
                      name: getValueByLang(item.title_ar, item.title_en),
                      content: (
                        <ProjectsImagesComp imagData={item?.projects_home ?? []} />
                      ),
                    })) ?? []
                  }
                />
              </div>
            )

          }

          {withMoreBtn && (
            <div
              className={styles.moreBtnWrap}
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <Button
                onClick={() => navigate(`${ROUTES.projects}/${projectParams}`)}
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
        </Container>
      </SectionsWrapper>
    </PageWrapper>

  );
};
export default ProjectsSection;
