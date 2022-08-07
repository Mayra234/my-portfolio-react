import { Card } from '../../../components/Card';
import { H2 } from '../../../components/H2';
import { Separator } from '../../../components/Separator';
import { Icon } from '../../../components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import React from 'react';

export const Contact = () => {
  return (
    <div id="contact" className="container-contact">
      <H2 className="title">Contacto</H2>
      <Separator />
      <p className="introduction">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        odio cumque harum laborum dignissimos iste!
      </p>
      <div>
        <Card palette="primary" className="contact-me">
          <Icon>
            <FontAwesomeIcon icon={faPhone} />
          </Icon>
          <H2>Teléfono</H2>
          <p>3126098992</p>
        </Card>
      </div>
    </div>
  );
};
