import { Card } from '../../../components/Card';
import { H2 } from '../../../components/H2';
import { Separator } from '../../../components/Separator';
import { Icon } from '../../../components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import React from 'react';
import { faEnvelope, faMessage } from '@fortawesome/free-regular-svg-icons';

export const Contact = () => {
  return (
    <div id="contact" className="container-contact">
      <H2 className="title">Contacto</H2>
      <Separator />
      <p className="introduction">
        Puedes contactarme a través de los sigientes medios
      </p>
      <div className="content-card-contact">
        <Card palette="primary" className="contact-me">
          <Icon>
            <FontAwesomeIcon icon={faPhone} />
          </Icon>
          <H2 className="title-contact">Teléfono</H2>
          <p>3126098992</p>
        </Card>
        <Card palette="primary" className="contact-me">
          <Icon>
            <FontAwesomeIcon icon={faEnvelope} />
          </Icon>
          <H2 className="title-contact">Email</H2>
          <p>alejandradiavanera@gmail.com</p>
        </Card>
        <a id="linkedin" href="www.linkedin.com/in/alejandra-diavanera">
          <Card palette="primary" className="contact-me">
            <Icon>
              <FontAwesomeIcon icon={faMessage} />
            </Icon>
            <H2 className="title-contact">LinkedIn</H2>
            Alejandra Diavanera
          </Card>
        </a>
      </div>
    </div>
  );
};
