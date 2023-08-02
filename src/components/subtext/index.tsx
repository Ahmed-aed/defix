import styles from './index.module.scss';

interface SubtextProps {
  text: string;
}
const Subtext = ({ text }: SubtextProps) => {
  return (
    <p data-aos='fade-up' data-aos-delay='200' className={styles.subtext}>
      {text}
    </p>
  );
};

export default Subtext;
