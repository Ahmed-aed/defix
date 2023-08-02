import { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import {
  DetailsModal,
  SectionsTitle,
  SectionsWrapper,
  Subtext,
  PageWrapper,
} from '../../components';
import { ProjectCard } from './components';
import { useCallApi, useModalState } from '../../hooks';
import { useParams } from 'react-router-dom';
import { ApiEndPointsValues } from '../../models';
import { IProjectDetails, IProjectItem } from '../../models/projects';
import { getValueByLang } from '../../utils';

const Projects = () => {
  const { id } = useParams();
  const [modalContent, setModalContent] = useState<IProjectItem>();
  const { isOpen, openModal, toggleModal } = useModalState();
  const handleDetailsClick = (details: IProjectItem) => {
    setModalContent(details);
    openModal();
  };

  const { data, isLoading } = useCallApi<IProjectDetails>(
    `/project/${id}` as ApiEndPointsValues
  );

  return (
    <PageWrapper loading={isLoading}>
      <SectionsWrapper>
        <Container>
          <SectionsTitle
            text={getValueByLang(
              data?.titleOurProjectsAr,
              data?.titleOurProjectsEn
            )}
          />
          <Subtext
            text={getValueByLang(
              data?.descriptionOurProjectsAr,
              data?.descriptionOurProjectsEn
            )}
          />

          <SectionsWrapper>
            <Row className='gy-4'>
              {data?.business?.projects?.map(item => (
                <Col key={item?.id} xl='4' md='6'>
                  <ProjectCard
                    data={item}
                    onDetailsClick={handleDetailsClick}
                  />
                </Col>
              ))}
            </Row>
          </SectionsWrapper>
        </Container>
      </SectionsWrapper>
      <DetailsModal
        onClosed={() => setModalContent(undefined)}
        data={{
          title: getValueByLang(modalContent?.title_ar, modalContent?.title_en),
          desc: getValueByLang(
            modalContent?.description_ar,
            modalContent?.description_en
          ),
          imgLink: modalContent?.master_image,
          subImageLink: getValueByLang(
            modalContent?.sub_image_ar,
            modalContent?.sub_image_en
          ),
        }}
        isOpen={isOpen}
        toggleModal={toggleModal}
      />
    </PageWrapper>
  );
};

export default Projects;
