import './index.css';

export const Button = ({
  id = '',
  children = '',
  style = '',
  className = '',
  palette = '',
  type = 'button',
}) => {
  if (palette === 'primary') {
    style = { background: '#e91e63' };
  } else if (palette === 'secondary') {
    style = { style };
  }

  return (
    <button
      id={id}
      className={'button' + className}
      palette={palette}
      style={style}
      type={type}
    >
      {children}
    </button>
  );
};
