import React, { useState } from 'react';
import { Tabs } from './index';

export default {
  title: 'Components/Tabs',
};

export const Overview = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Tabs
        tabs={[
          {
            text: 'Estudios',
          },
          { text: 'Saberes' },
          { text: 'Experiencia' },
        ]}
        onChange={(index) => setCurrentTab(index)}
      />
      {currentTab === 0 && (
        <div className="tab-container">contenedor de Estudios</div>
      )}
      {currentTab === 1 && (
        <div className="tab-container">contenedor de Saberes</div>
      )}
      {currentTab === 2 && (
        <div className="tab-container">contenedor de Experiencia</div>
      )}
    </div>
  );
};
