import React from 'react';
import { Avatar } from '../Avatar';
import { ListNavLinks } from '../ListNavLinks';
import { Navbar } from './index';

export default {
  title: 'Components/Navbar',
};

export const Overview = () => {
  return (
    <Navbar style={{ background: 'pink' }}>
      <Avatar mainText="Mayra" />
      <ListNavLinks
        links={[
          { children: 'inicio' },
          { children: 'Sobre mi' },
          { children: 'Hoja de vida' },
          { children: 'Proyectos' },
          { children: 'Contacto' },
        ]}
      />
    </Navbar>
  );
};
