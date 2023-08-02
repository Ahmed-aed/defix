import { Container } from 'reactstrap';
import styles from '../index.module.scss';

interface ServicesHeroProps {
  title: string;
  imgLink: string;
  desc: string;
}
export const ServicesHero = ({ title, imgLink, desc }: ServicesHeroProps) => {
  return (
    <div
      className={`${styles.servicesHero} bg-cover`}
      style={{ backgroundImage: `url(${imgLink})` }}
    >
      <Container>
        <div className={styles.servicesHeroContent}>
          <div>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
