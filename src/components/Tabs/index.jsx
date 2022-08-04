import { mounted } from '../../utils/mounted';
import { Tab } from '../Tab';
import './index.css';

export const Tabs = ({ className = '', tabs = [], onChange = () => {} }) => {
  mounted(() => {
    let currentTabIndex = 0;
    const contentTabs = document.querySelectorAll('.tab-nav-item');

    contentTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        currentTabIndex = index;
        onChange(index);
      });
    });
  });

  return (
    <div className="content-tabs">
      <ul className={'tabs ' + className}>
        {tabs.map((tab, i) => {
          <Tab key={i} {...tab} />;
        })}
      </ul>
    </div>
  );
};
