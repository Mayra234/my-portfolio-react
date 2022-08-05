import React from 'react';
import { ListNavLinks } from '.';

export default {
  title: 'Components/ListNavLinks',
};

export const Overview = () => {
  return (
    <ListNavLinks
      links={[
        { children: 'Inicio' },
        { children: 'Hoja de vida' },
        { children: 'Proyectos' },
      ]}
    />
  );
};
