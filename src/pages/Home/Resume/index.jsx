import { Tabs } from '../../../components/Tabs';
import { Separator } from '../../../components/Separator';
import { H2 } from '../../../components/H2';
import { H1 } from '../../../components/H1';
import { H3 } from '../../../components/H3';
import { Card } from '../../../components/Card';
import { SkillBar } from '../../../components/SkillBar';
import React, { useState } from 'react';
import './index.css';

export const Resume = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div id="resume" className="content-resume">
      <H2>Habilidades</H2>
      <Separator />
      <Tabs
        tabs={[
          {
            text: 'Estudios',
          },
          { text: 'Habilidades' },
          { text: 'Experiencia' },
        ]}
        onChange={(index) => setCurrentTab(index)}
      />
      {currentTab === 0 && (
        <div className="tab-container">
          <Card palette="primary">
            <div className="title-card">
              <H1>Portafolio personal</H1>
              <H3>Universidad de DVI (1997 - 2001)</H3>
            </div>
            <p>
              La educación debe ser muy interactivo. Ut tincidunt est ac dolor
              aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
              lobortis mauris hendrerit ante.
            </p>
          </Card>
        </div>
      )}
      {currentTab === 1 && (
        <div className="tab-container">
          <Card palette="primary">
            <SkillBar mainText="html" percentage="90" />
            <SkillBar mainText="css" percentage="10" />
            <SkillBar mainText="javascript" percentage="100" />
            <SkillBar mainText="react" percentage="70" />
          </Card>
        </div>
      )}
      {currentTab === 2 && (
        <div className="tab-container">
          <Card palette="primary">
            <div className="title-card">
              <H1>Paymentez SAS</H1>
            </div>
            <p className="information">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              blanditiis.
            </p>
          </Card>
        </div>
      )}
    </div>
  );
};
