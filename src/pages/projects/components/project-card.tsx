import { MoreBtnLink } from '../../../components';
import { manualTranslatedItems } from '../../../constants';
import { IProjectItem } from '../../../models/projects';
import { getValueByLang } from '../../../utils';
import styles from '../index.module.scss';
interface ProjectCardProps {
  data: IProjectItem;
  onDetailsClick: (data: IProjectItem) => void;
}
export const ProjectCard = ({ data, onDetailsClick }: ProjectCardProps) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardImage}>
        <img
          className='img-full'
          loading='lazy'
          src={data?.master_image}
          alt={getValueByLang(data?.title_ar, data?.title_en)}
          title={getValueByLang(data?.title_ar, data?.title_en)}
        />
      </div>
      <div className={styles.projectCardContent}>
        <div>
          <h5>{getValueByLang(data?.title_ar, data?.title_en)}</h5>
          <p>{getValueByLang(data?.description_ar, data?.description_en)}</p>
        </div>
        <MoreBtnLink
          onClick={() => onDetailsClick(data)}
          text={getValueByLang(
            manualTranslatedItems.showDetails.ar,
            manualTranslatedItems.showDetails.en
          )}
        />
      </div>
    </div>
  );
};
