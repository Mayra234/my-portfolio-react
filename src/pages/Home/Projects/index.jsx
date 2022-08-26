import React from 'react';
import './index.css';
import { H2 } from '../../../components/H2';
import { H3 } from '../../../components/H3';
import { Separator } from '../../../components/Separator';
import { Card } from '../../../components/Card';
import { Icon } from '../../../components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFeather,
  faShirt,
  faArrowUpRightFromSquare,
  faCodeBranch,
  faCalculator,
  faPeopleGroup,
  faHandSpock,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from '../../../components/NavLink';

export const Projects = () => {
  return (
    <div id="project" className="container-projects">
      <H2 className="title">Proyectos</H2>
      <Separator />
      <p className="introduction">
        Los siguientes proyectos fueron creados como modo académico
      </p>
      <div className="content-cards-project">
        <Card palette="secondary" className="project">
          <Icon>
            <FontAwesomeIcon icon={faShirt} />
          </Icon>
          <H3 className="title-project">admin-crud-clothes</H3>
          <p className="date">Mayo 2022 - presente</p>
          <div className="text-card-project">
            <p>
              Proyecto de práctica de una plataforma administrativa para
              gestionar un almacén de ropa utilizando vanilla HTML, CSS y
              Javascript.
            </p>
          </div>
          <div className="icon-nav">
            <NavLink route="https://github.com/Mayra234/admin-crud-clothes/">
              <Icon>
                <FontAwesomeIcon
                  className="icon-link"
                  icon={faArrowUpRightFromSquare}
                />
              </Icon>
            </NavLink>
            <NavLink route="https://mayra234.github.io/admin-crud-clothes/">
              <Icon>
                <FontAwesomeIcon className="icon-link" icon={faCodeBranch} />
              </Icon>
            </NavLink>
          </div>
        </Card>

        <Card palette="secondary" className="project">
          <Icon>
            <FontAwesomeIcon icon={faFeather} />
          </Icon>
          <H3 className="title-project">fosico</H3>
          <p className="date">Abril 2022 - Mayo 2022</p>
          <div className="text-card-project">
            <p>
              Proyecto de maquetación web utilizando HTML, CSS, grid y flexbox
              para clonar una landing page con temática de tienda de artes.
            </p>
          </div>
          <div className="icon-nav">
            <NavLink route="https://github.com/Mayra234/fosico-html-css">
              <Icon>
                <FontAwesomeIcon
                  className="icon-link"
                  icon={faArrowUpRightFromSquare}
                />
              </Icon>
            </NavLink>
            <NavLink route="https://mayra234.github.io/fosico-html-css/">
              <Icon>
                <FontAwesomeIcon className="icon-link" icon={faCodeBranch} />
              </Icon>
            </NavLink>
          </div>
        </Card>

        <Card palette="secondary" className="project">
          <Icon>
            <FontAwesomeIcon icon={faCalculator} />
          </Icon>
          <H3 className="title-project">calculadora html</H3>
          <p className="date">Enero 2022 - Abril 2022</p>
          <div className="text-card-project">
            <p>
              Proyecto de maquetación web utilizando HTML, CSS, grid y flexbox
              para clonar una calculadora.
            </p>
          </div>
          <div className="icon-nav">
            <NavLink route="https://github.com/Mayra234/vanilla-js-calculator">
              <Icon>
                <FontAwesomeIcon
                  className="icon-link"
                  icon={faArrowUpRightFromSquare}
                />
              </Icon>
            </NavLink>
            <NavLink route="https://mayra234.github.io/vanilla-js-calculator/">
              <Icon>
                <FontAwesomeIcon className="icon-link" icon={faCodeBranch} />
              </Icon>
            </NavLink>
          </div>
        </Card>

        <Card palette="secondary" className="project">
          <Icon>
            <FontAwesomeIcon icon={faPeopleGroup} />
          </Icon>
          <H3 className="title-project">Clon del layout de Google meets</H3>
          <p className="date">Enero 2022 - Abril 2022</p>
          <div className="text-card-project">
            <p>
              Proyecto de maquetación web utilizando HTML, CSS, grid y flexbox
              para clonar una landing page con temática de google meet.
            </p>
          </div>
          <div className="icon-nav">
            <NavLink route="https://github.com/Mayra234/layout-meet">
              <Icon>
                <FontAwesomeIcon
                  className="icon-link"
                  icon={faArrowUpRightFromSquare}
                />
              </Icon>
            </NavLink>
            <NavLink route=" https://mayra234.github.io/layout-meet/">
              <Icon>
                <FontAwesomeIcon className="icon-link" icon={faCodeBranch} />
              </Icon>
            </NavLink>
          </div>
        </Card>

        <Card palette="secondary" className="project">
          <Icon>
            <FontAwesomeIcon icon={faHandSpock} />
          </Icon>
          <H3 className="title-project">Piedra, papel o tijera</H3>
          <p className="date">Agosto 2022 - Agosto 2022</p>
          <div className="text-card-project">
            <p>
              Proyecto de maquetación web utilizando HTML, CSS, grid, flexbox y
              Javascript para realizar una landing page con temática del juego
              piedra, papel o tijera.
            </p>
          </div>
          <div className="icon-nav">
            <NavLink route="https://github.com/Mayra234/rock-paper-scissors-react">
              <Icon>
                <FontAwesomeIcon
                  className="icon-link"
                  icon={faArrowUpRightFromSquare}
                />
              </Icon>
            </NavLink>
            <NavLink route=" https://mayra234.github.io/rock-paper-scissors-react/">
              <Icon>
                <FontAwesomeIcon className="icon-link" icon={faCodeBranch} />
              </Icon>
            </NavLink>
          </div>
        </Card>
      </div>
    </div>
  );
};
