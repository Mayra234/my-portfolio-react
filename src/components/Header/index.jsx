import './index.css';

export const Header = ({
  children = '',
  className = '',
  menuResponsive = '',
  style = '',
}) => {
  return (
    <div className={'header ' + className}>
      <div>{menuResponsive}</div>
      <div>{children}</div>
    </div>
  );
};
