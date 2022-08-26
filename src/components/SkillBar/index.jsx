import './index.css';
import React from 'react';

export const SkillBar = ({ percentage = '', mainText = '' }) => {
  return (
    <div className="skill-bar">
      <h6 className="skill-bar-title">{mainText}</h6>
      <h6 className="skill-bar-percentage">{percentage}%</h6>
      <div className="container-skill-bar">
        <div
          className="skill-bar-child"
          style={{ '--width': `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
