import './index.css';

export const H1 = ({ className = '', children = '', style = '' }) => {
  return (
    <h1 className={'h1 ' + className} style={{ style }}>
      {children}
    </h1>
  );
};
