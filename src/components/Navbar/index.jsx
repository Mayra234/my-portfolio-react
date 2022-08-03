import { Avatar } from '../Avatar';
import { ListNavLinks } from '../ListNavLinks';
import './index.css';

export const Navbar = ({ style = '' }) => {
  return (
    <div className="navbar" style={style}>
      <Avatar mainText="Alejandra" />
      <ListNavLinks
        links={[
          { style: { color: 'black' }, children: 'Inicio', route: '#banner' },
          {
            style: { color: 'black' },
            children: 'Sobre mi',
            route: '#about-me',
          },
          {
            style: { color: 'black' },
            children: 'Hoja de vida',
            route: '#resume',
          },
          {
            style: { color: 'black' },
            children: 'Proyectos',
            route: '#project',
          },
          {
            style: { color: 'black' },
            children: 'Contacto',
            route: '#contact',
          },
        ]}
      />
    </div>
  );
};
