import './index.css';

export const H3 = ({ className = '', children = '', style = '' }) => {
  return (
    <h3 className={'h3' + className} style={{ style }}>
      {children}
    </h3>
  );
};
