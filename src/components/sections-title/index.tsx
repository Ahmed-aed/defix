import styles from './index.module.scss';

interface SectionsTitleProps {
  text: string;
  className?: string;
}

const SectionsTitle = ({ text, className }: SectionsTitleProps) => {
  return (
    <h2
      className={`${styles.sectionTitle} ${className}`}
      data-aos='fade-up'
      data-aos-delay='150'
    >
      <span>{text}</span>
    </h2>
  );
};

export default SectionsTitle;
