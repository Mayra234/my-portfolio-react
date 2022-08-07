import { useEffect, useState } from 'react';
import './index.css';
import React from 'react';

export const Card = ({
  children = '',
  className = '',
  palette = 'primary',
  ...props
}) => {
  const [style, setStyle] = useState(props.style);

  const changePalette = () => {
    if (palette === 'primary') {
      setStyle((prevStyle) => ({
        ...prevStyle,
        boxShadow: '0 20px 40px rgb(0 0 0 / 20%)',
      }));
    } else if (palette === 'secondary') {
      setStyle((prevStyle) => ({
        ...prevStyle,
        padding: '30px 10px',
        margin: '0 15px 15px',
        overflow: 'hidden',
      }));
    }
  };

  useEffect(() => {
    changePalette();
  }, [palette]);

  return (
    <div palette={palette} style={style} className={'card ' + className}>
      {children}
    </div>
  );
};
