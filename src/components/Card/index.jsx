import './index.css';

export const Card = ({
  children = '',
  className = '',
  palette = 'primary',
  style = '',
}) => {
  if (palette === 'primary') {
    style = {
      boxShadow: '0 20px 40px rgb(0 0 0 / 20%)',
    };
  } else if (palette === 'secondary') {
    style = {
      padding: '30px 10px',
      margin: '0 15px 15px',
      overflow: 'hidden',
    };
  }

  return (
    <div style={style} className={'card' + className}>
      {children}
    </div>
  );
};
