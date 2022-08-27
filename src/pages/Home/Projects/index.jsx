import React from 'react';
import './index.css';
import { H2 } from '../../../components/H2';
import { H3 } from '../../../components/H3';
import { Separator } from '../../../components/Separator';
import { Card } from '../../../components/Card';
import { Icon } from '../../../components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../../../components/Button';
import { PROJECTS } from '../../../constants/projects';
import {
  faArrowUpRightFromSquare,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';

export const Projects = () => {
  return (
    <div id="project" className="container-projects">
      <H2 className="title">Proyectos</H2>
      <Separator />
      <div className="content-cards-project">
        {PROJECTS.map((project, i) => (
          <Card key={i} palette="secondary" className="project">
            <Icon>
              <FontAwesomeIcon style={{ fontSize: 32 }} icon={project.icon} />
            </Icon>
            <H3 className="title-project">{project.title}</H3>
            <p className="date">{project.date}</p>
            <div className="text-card-project">
              <p>{project.text}</p>
            </div>
            <div className="icon-nav">
              {project.siteUrl && (
                <a href={project.siteUrl} target="_blank">
                  <Button className="icons-project">
                    <Icon>
                      <FontAwesomeIcon
                        className="icon-link"
                        icon={faArrowUpRightFromSquare}
                      />
                    </Icon>
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank">
                  <Button className="icons-project">
                    <Icon>
                      <FontAwesomeIcon
                        className="icon-link"
                        icon={faCodeBranch}
                      />
                    </Icon>
                  </Button>
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
