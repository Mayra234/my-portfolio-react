import React from 'react';
import './index.css';
import { H3 } from '../../../components/H3';
import { H1 } from '../../../components/H1';
import { Button } from '../../../components/Button';
import { NavLink } from '../../../components/NavLink';

export const Banner = () => {
  return (
    <div id="banner" className="content-banner">
      <div className="banner">
        <div className="welcome-text">
          <section>
            <H3 className="text-h3">Bienvenido a mi sitio web</H3>
            <H1 className="text-h1">Alejandra Diavanera</H1>
            <Button palette="primary">
              <a href="#contact">Contáctame</a>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};
