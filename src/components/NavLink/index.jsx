import './index.css';

export const NavLink = ({
  id = '',
  children = '',
  route = '',
  style = '',
  className = '',
}) => {
  return (
    <li className="nav" style={{ style }}>
      <a href={route} className={'link-nav' + className} id={id}>
        {children}
      </a>
    </li>
  );
};
