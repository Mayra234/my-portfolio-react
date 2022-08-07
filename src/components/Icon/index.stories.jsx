import React from 'react';
import { Icon } from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Icon',
};

export const Overview = () => {
  return (
    <Icon>
      <FontAwesomeIcon icon={faAmbulance} />
    </Icon>
  );
};
