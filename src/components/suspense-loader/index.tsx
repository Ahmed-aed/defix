import { useEffect } from 'react';
import NProgress from 'nprogress';
import { Spinner } from 'reactstrap';
import styles from './index.module.scss';

function SuspenseLoader() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className={styles.suspenseWrapper}>
      <Spinner />
    </div>
  );
}

export default SuspenseLoader;
