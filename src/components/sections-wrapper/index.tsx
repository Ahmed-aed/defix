import { PropsWithChildren } from 'react';
import styles from './index.module.scss';

interface SectionsWrapperProps {
  className?: string;
  id?: string;
}

const SectionsWrapper = ({
  className = '',
  id,
  children,
}: PropsWithChildren<SectionsWrapperProps>) => {
  return (
    <section id={id} className={`${className} ${styles.sectionWrapper}`}>
      {children}
    </section>
  );
};

export default SectionsWrapper;
