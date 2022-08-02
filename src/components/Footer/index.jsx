import './index.css';

export const Footer = ({ children = '' }) => {
  return (
    <footer className="footer">
      <div className="content-footer">{children}</div>
    </footer>
  );
};
