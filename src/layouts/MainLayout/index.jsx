import React, { useState } from 'react';
import './index.css';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Avatar } from '../../components/Avatar';
import { Footer } from '../../components/Footer';
import { ListNavLinks } from '../../components/ListNavLinks';
import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const MainLayout = ({ children = '' }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="main-layout">
        <Header>
          <Navbar className="menu-nav">
            <Avatar mainText="Mayra" />
            <ListNavLinks
              className={`list-links ${menu ? 'active' : ''}`}
              links={[
                { children: 'inicio', route: '#banner' },
                { children: 'Sobre mi', route: '#about-me' },
                { children: 'Hoja de vida', route: '#resume' },
                { children: 'Proyectos', route: '#project' },
                { children: 'Contacto', route: '#contact' },
              ]}
            />
          </Navbar>
          <Button
            className="bar-menu"
            palette="secondary"
            id="button-menu"
            onClick={toggleMenu}
          >
            <Icon>
              <FontAwesomeIcon icon={faBars} />
            </Icon>
          </Button>
        </Header>
      </div>
      <div>{children}</div>
      <Footer>© 2022</Footer>
    </>
  );
};
