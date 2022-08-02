import { Avatar } from '../Avatar';
import { ListNavLinks } from '../ListNavLinks';
import './index.css';

export const Navbar = ({ style = '' }) => {
  return (
    <div className="navbar" style={style}>
      <Avatar mainText="Alejandra" />
      <ListNavLinks
        links={[
          { children: 'Inicio', route: '#banner' },
          { children: 'Sobre mi', route: '#about-me' },
          { children: 'Hoja de vida', route: '#resume' },
          { children: 'Proyectos', route: '#project' },
          { children: 'Contacto', route: '#contact' },
        ]}
      />
    </div>
  );
};
