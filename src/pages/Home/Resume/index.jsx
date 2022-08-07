import { Tabs } from '../../../components/Tabs';
import { Separator } from '../../../components/Separator';
import { H2 } from '../../../components/H2';
import React from 'react';

export const Resume = () => {
  return (
    <div id="resume" className="content-resume">
      <H2>Habilidades</H2>
      <Separator />
      <Tabs
        Tabs={[
          {
            text: 'Estudios',
            className: 'active',
          },
          { text: 'Habilidades' },
          { text: 'Experiencia' },
        ]}
      />
      <div id="tab-content"></div>
    </div>
  );
};
