import { NavLink } from '../NavLink';
import './index.css';

export const ListNavLinks = (props) => {
  return props.links.map((link, i) => <NavLink key={i} {...link} />);
};
