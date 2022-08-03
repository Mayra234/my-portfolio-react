import './index.css';

export const Avatar = ({ image = '', mainText = '', className = '' }) => {
  return (
    <div className={'avatar ' + className}>
      <a className="a">
        <span className="image-avatar">
          {image ? (
            <img
              style={{ objectFit: 'cover', borderRadius: '50%' }}
              src={image}
            />
          ) : (
            mainText[0]
          )}
        </span>
      </a>
      <div>
        <span className="avatar-name">{mainText}</span>
      </div>
    </div>
  );
};
