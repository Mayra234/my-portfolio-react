import React from 'react';
import { Tabs } from './index';

export default {
  title: 'Components/Tabs',
};

export const Overview = () => {
  return (
    <Tabs
      tabs={[
        {
          children: 'Estudios',
        },
        { children: 'Saberes' },
        { children: 'Experiencia' },
      ]}
    />
  );
};
