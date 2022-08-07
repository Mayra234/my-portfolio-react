import React from 'react';
import './index.css';
import { H2 } from '../../../components/H2';
import { H3 } from '../../../components/H3';
import { Separator } from '../../../components/Separator';
import { Card } from '../../../components/Card';
import { Icon } from '../../../components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export const Projects = () => {
  return (
    <div id="project" className="container-projects">
      <H2 className="title">Proyectos</H2>
      <Separator />
      <p className="introduction">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga accusamus
        est temporibus in blanditiis eius beatae reiciendis aut explicabo, eaque
        modi sed praesentium, expedita ad possimus repudiandae provident
        sapiente vel? Adipisci exercitationem, excepturi voluptates obcaecati
        cum unde aut omnis consectetur illo veniam voluptatibus. Temporibus modi
        ut eius.
      </p>
      <Card palette="secondary" className="project">
        <a>
          <Icon>
            <FontAwesomeIcon icon={faHouse} />
          </Icon>
          <H3 className="title-project">Desarrollo web</H3>
        </a>
        <div className="text-card-project">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, velit!
          </p>
        </div>
      </Card>
    </div>
  );
};
