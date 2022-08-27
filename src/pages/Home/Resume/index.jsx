import React, { useState } from 'react';
import './index.css';
import { Card } from '../../../components/Card';
import { H1 } from '../../../components/H1';
import { H2 } from '../../../components/H2';
import { H3 } from '../../../components/H3';
import { Separator } from '../../../components/Separator';
import { SkillBar } from '../../../components/SkillBar';
import { STUDIES, SKILLS } from '../../../constants/skills';
import { Tabs } from '../../../components/Tabs';

export const Resume = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div id="resume" className="content-resume">
      <H2>Habilidades</H2>
      <Separator />
      <Tabs
        tabs={[
          {
            text: 'Habilidades',
          },
          { text: 'Estudios' },
        ]}
        onChange={(index) => setCurrentTab(index)}
      />
      {currentTab === 0 && (
        <div className="tab-container">
          <Card palette="primary" className="content-skill" border shadow>
            {SKILLS.map((skill, i) => (
              <SkillBar
                key={i}
                mainText={skill.name}
                percentage={skill.score}
              />
            ))}
          </Card>
        </div>
      )}
      {currentTab === 1 && (
        <div className="tab-container tab-study">
          {STUDIES.map((study, i) => (
            <Card key={i} palette="primary" shadow border>
              <div className="title-card">
                <H1 className="title-study">{study.title}</H1>
                <H3>{study.placeAndDate}</H3>
              </div>
              <p></p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
