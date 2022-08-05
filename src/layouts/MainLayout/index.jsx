import React from 'react';
import './index.css';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Avatar } from '../../components/Avatar';
import { ListNavLinks } from '../../components/ListNavLinks';
import { Button } from '../../components/Button';

export const MainLayout = ({ children = '' }) => {
  return (
    <>
      <div className="main-layout">
        <Header>
          <Navbar>
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
          <Button className="bar-menu" palette="secondary" id="button-menu">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </Button>
        </Header>
      </div>
      <div>{children}</div>
    </>
  );
};
