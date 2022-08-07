import React from 'react';
import { AboutMe } from './AboutMe';
import { Banner } from './Banner';
import { Resume } from './Resume';
import { Projects } from './Projects';
import { Contact } from './Contact';

export const Home = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      {/* <Resume /> */}
      <Projects />
      <Contact />
    </>
  );
};
