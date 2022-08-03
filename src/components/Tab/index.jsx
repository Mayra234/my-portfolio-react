import './index.css';

export default {
  title: 'Components/Tab',
};

export const Overview = ({ id = '', className = '', text = '' }) => {
  return (
    <div className="container-tab">
      <li id={id} className="tab-nav-item">
        <a className={'tab-nav-link ' + className}>{text}</a>
      </li>
    </div>
  );
};
