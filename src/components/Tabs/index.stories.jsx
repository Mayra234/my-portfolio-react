import React from 'react';
import { mounted } from '../../utils/mounted';
import { Tabs } from './index';

export default {
  title: 'Components/Tabs',
};

export const Overview = () => {
  let tabContent;
  const renderTab = (index) => {
    switch (index) {
      case 0:
        tabContent.innerHTML = <div>Estudios</div>;
        break;
      case 1:
        tabContent.innerHTML = <div>Habilidades</div>;
        break;
      case 3:
        tabContent.innerHTML = <div>Experiencias</div>;
        break;
      default:
        return '';
    }
  };

  mounted(() => {
    tabContent = document.getElementById('tab-content');
    renderTab(0);
  });

  return (
    <>
      <Tabs
        tabs={[
          {
            children: 'Estudios',
          },
          { children: 'Saberes' },
          { children: 'Experiencia' },
        ]}
        onChange={renderTab}
      />
      <div id="tab-content"></div>
    </>
  );
};
