import React, { useEffect } from 'react';
import { H2 } from '../../../components/H2';
import { H3 } from '../../../components/H3';
import me from '../../../assets/image/me.jpg';
import './index.css';

export const AboutMe = () => {
  return (
    <div id="about-me" className="container-about">
      <div className="image-about-me">
        <img className="image-about" src={me} />
      </div>
      <div className="text-about">
        <H2 className="text-about-h2">Alejandra Diavanera</H2>
        <H3 className="text-about-h3">
          Desarrolladora Frontend Javascript + ReactJS
        </H3>
        <p className="p">
          Desarrolladora Frontend con 3 años de experiencia creando aplicaciones
          web utilizando HTML, CSS, Javascript, Typescript, NextJS, Redux y
          ReactJS. He trabajado en proyectos de carácter académico y laboral
          aplicando la metodología scrum, construyendo componentes atómicos en
          Javascript y React mediante Storybook y aplicando patrones de diseño
          para mantener un código legible y evitar malas prácticas de
          desarrollo. Administro varias bibliotecas para ayudar a optimizar y
          mejorar los diseños de proyectos, incluidas Bootstrap y Material UI.
          Interesada en seguir aprendiendo metodologías organizadas de
          desarrollo de software para la producción de tecnologías escalables.
        </p>
      </div>
    </div>
  );
};
