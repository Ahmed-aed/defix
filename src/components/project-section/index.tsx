import { Container } from 'reactstrap';
import ProjectsImages from '../projects-images';
import { getValueByLang } from '../../utils';
import SectionsWrapper from '../sections-wrapper';
import SectionsTitle from '../sections-title';
import Button from '../button';
import { useNavigate } from 'react-router-dom';
import { ROUTES, manualTranslatedItems } from '../../constants';
import styles from './index.module.scss';
import Subtext from '../subtext';
import { BodySliderData, ProjectsHome } from '../../models';
import Tabs from '../tabs';
import { useEffect, useState } from 'react';

interface ProjectsSectionProps {
  withMoreBtn?: boolean;
  title?: string;
  subTitle?: string;
  className?: string;
  data?: BodySliderData;
}

const ProjectsImagesComp = ({ imagData }: { imagData: ProjectsHome[] }) => {
  return <ProjectsImages images={imagData?.map(item => item?.master_image)} />;
};

const ProjectsSection = ({
  withMoreBtn = true,
  title,
  subTitle,
  className,
  data,
}: ProjectsSectionProps) => {
  const [activeTab, setActiveTab] = useState<number>();
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      setActiveTab(data?.businesprojectsHome?.[0]?.id ?? 1);
    }
  }, [data]);
  return (
    <SectionsWrapper
      id='projects'
      className={`${styles.projectsSection} ${className}`}
    >
      <Container>
        {title && <SectionsTitle text={title} />}
        {subTitle && <Subtext text={subTitle} />}

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
        {withMoreBtn && (
          <div
            className={styles.moreBtnWrap}
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <Button
              onClick={() => navigate(`${ROUTES.projects}/${activeTab}`)}
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
  );
};
export default ProjectsSection;
