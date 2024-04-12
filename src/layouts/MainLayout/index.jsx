import React, { useState } from 'react';
import './index.css';
import { Header } from '../../components/Header';
import { Navbar } from '../../components/Navbar';
import { Avatar } from '../../components/Avatar';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from '../../components/NavLink';
import me from '../../assets/image/me.jpg';

export const MainLayout = ({ children = '' }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const links = [
    {
      children: 'Inicio',
      route: '#banner',
      onClick: () => {
        setMenu(!menu);
      },
    },
    {
      children: 'Sobre mi',
      route: '#about-me',
      onClick: () => {
        setMenu(!menu);
      },
    },
    {
      children: 'Hoja de vida',
      route: '#resume',
      onClick: () => {
        setMenu(!menu);
      },
    },
    {
      children: 'Proyectos',
      route: '#project',
      onClick: () => {
        setMenu(!menu);
      },
    },
    {
      children: 'Contacto',
      route: '#contact',
      onClick: () => {
        setMenu(!menu);
      },
    },
  ];

  return (
    <>
      <div className="main-layout">
        <Header>
          <Navbar className="menu-nav">
            <Avatar mainText="Mayra" image={me} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {links.map((link, i) => (
                <NavLink key={i} route={link.route}>
                  {link.children}
                </NavLink>
              ))}
            </div>
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
        <div>{children}</div>
        <Footer>© 2024</Footer>
      </div>
    </>
  );
};
