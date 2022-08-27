import { Card } from '../../../components/Card';
import { H2 } from '../../../components/H2';
import { Separator } from '../../../components/Separator';
import { Icon } from '../../../components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css';
import React from 'react';
import { CONTACTS } from '../../../constants/contact';

export const Contact = () => {
  return (
    <div id="contact" className="container-contact">
      <H2 className="title">Contáctame</H2>
      <Separator />
      <div className="content-card-contact">
        {CONTACTS.map((contact, i) => (
          <Card key={i} palette="primary" className="contact-me" shadow border>
            <a
              href={contact.route || '#contact'}
              target={contact.route && '_blank'}
            >
              <Icon>
                <FontAwesomeIcon icon={contact.icon} />
              </Icon>
              <H2 className="title-contact">{contact.title}</H2>
              <p>{contact.text}</p>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};
