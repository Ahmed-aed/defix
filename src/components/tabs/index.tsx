import { ReactNode } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import styles from './index.module.scss';
import Button from '../button';

interface TabsProps {
  tabs: { id: number; name: string; content: ReactNode | ReactNode[] }[];
  setSelectedTab: (tabId: number) => void;
  activeTab: number;
}

const Tabs = ({ tabs, setSelectedTab, activeTab }: TabsProps) => {
  return (
    <div>
      <div className={styles.btnsWrapper}>
        {tabs.map((item, index) => (
          <Button
            key={index}
            type={item.id === activeTab ? 'primary' : 'outlined'}
            onClick={() => setSelectedTab(item.id)}
          >
            {item.name}
          </Button>
        ))}
      </div>

      <TabContent activeTab={activeTab}>
        {tabs.map((item, index) => (
          <TabPane key={index} tabId={item.id}>
            {item.content}
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};

export default Tabs;
