import React from 'react';
import { H2 } from '../../../components/H2';
import { H3 } from '../../../components/H3';
import './index.css';

export const AboutMe = () => {
  return (
    <div id="about-me" className="container-about">
      <div className="image-about-me">
        <img className="image-about" src="" />
      </div>
      <div className="text-about">
        <H2 className="text-about-h2">Mayra Diavanera</H2>
        <H3 className="text-about-h3">Web Developer</H3>
        <p className="p">
          Web Developer with 5+ years of experience in designing and developing
          user interfaces, testing, debugging and tracing staff within
          e-commerce technologies. Proven ability in optimizing web
          functionalities that improve data retrieval and workflow efficiencies.
        </p>
      </div>
    </div>
  );
};
