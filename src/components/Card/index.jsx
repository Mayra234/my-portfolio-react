import { useEffect, useState } from 'react';
import './index.css';
import React from 'react';

export const Card = ({
  children = '',
  className = '',
  palette = 'primary',
  shadow = false,
  border = false,
  ...props
}) => {
  const [style, setStyle] = useState(props.style);
  const [paletteClass, setPaletteClass] = useState();

  useEffect(() => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      boxShadow: shadow ? '0 7px 10px rgb(0 0 0 / 20%)' : undefined,
    }));
  }, [shadow]);

  useEffect(() => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      borderWidth: border ? '1px' : undefined,
      borderStyle: border ? 'solid' : undefined,
    }));
  }, [border]);

  useEffect(() => {
    switch (palette) {
      case 'primary':
        setPaletteClass('primary-card-palette');
        break;
      case 'secondary':
        setPaletteClass('secondary-card-palette');
        break;
      default:
        setPaletteClass('primary-card-palette');
        break;
    }
  }, [palette]);

  return (
    <div style={style} className={`card ${className} ${paletteClass}`}>
      {children}
    </div>
  );
};
