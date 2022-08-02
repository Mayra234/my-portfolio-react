import './index.css';

export const H2 = ({ className = '', children = '', style = '' }) => {
  return (
    <h2 className={'h2' + className} style={{ style }}>
      {children}
    </h2>
  );
};
