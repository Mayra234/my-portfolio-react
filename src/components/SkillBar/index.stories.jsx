import React from 'react';
import { SkillBar } from './index';

export default {
  title: 'Components/SkillBar',
};

export const Overview = () => {
  return (
    <>
      <SkillBar mainText="css" percentage="14" />
      <SkillBar mainText="HTML/CSS" percentage="15" />
    </>
  );
};
