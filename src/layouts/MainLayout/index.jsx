import React from 'react';
import './index.css';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Avatar } from '../../components/Avatar';
import { ListNavLinks } from '../../components/ListNavLinks';
import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
            <Icon>
              <FontAwesomeIcon icon={faBars} />
            </Icon>
          </Button>
        </Header>
      </div>
      <div>{children}</div>
    </>
  );
};
