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
            text: 'habilidades',
          },
          { text: 'Estudios' },
        ]}
        onChange={(index) => setCurrentTab(index)}
      />
      {currentTab === 0 && (
        <div className="tab-container">
          <Card palette="primary" className="content-skill">
            <SkillBar mainText="html" percentage="80" />
            <SkillBar mainText="css" percentage="75" />
            <SkillBar mainText="javascript" percentage="75" />
            <SkillBar mainText="react" percentage="60" />
            <SkillBar mainText="git" percentage="55" />
            <SkillBar mainText="webpack" percentage="55" />
            <SkillBar mainText="storybook" percentage="60" />
          </Card>
        </div>
      )}
      {currentTab === 1 && (
        <div className="tab-container tab-study">
          <Card palette="primary">
            <div className="title-card">
              <H1 className="title-study">Curso Básico de Programación</H1>
              <H3>Platzi (2022)</H3>
            </div>
            <p>---</p>
          </Card>
          <Card palette="primary">
            <div className="title-card">
              <H1 className="title-study">Técnico en Sistemas</H1>
              <H3>Sena (2017-2018)</H3>
            </div>
            <p>---</p>
          </Card>
          <Card palette="primary">
            <div className="title-card">
              <H1 className="title-study">
                Tecnólogo en Análisis y Desarrollo de Sistemas de Información
              </H1>
              <H3>Sena (2019-2021)</H3>
            </div>
            <p>---</p>
          </Card>
          <Card palette="primary">
            <div className="title-card">
              <H1 className="title-study">Portafolio personal</H1>
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
    </div>
  );
};
