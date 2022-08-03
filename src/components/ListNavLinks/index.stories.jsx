import React from 'react';
import { ListNavLinks } from '.';

export default {
  title: 'Components/ListNavLinks',
};

export const Overview = () => {
  return (
    <ListNavLinks
      links={[
        { style: { color: 'black' }, children: 'Inicio' },
        { style: { color: 'black' }, children: 'Hoja de vida' },
        { style: { color: 'black' }, children: 'Proyectos' },
      ]}
    />
  );
};
