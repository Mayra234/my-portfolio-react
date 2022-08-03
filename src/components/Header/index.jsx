import './index.css';

export const Header = ({
  children = '',
  className = '',
  menuResponsive = '',
  style = '',
}) => {
  return (
    <div style={style} className={'header ' + className}>
      <div>{children}</div>
      <div>{menuResponsive}</div>
    </div>
  );
};
