import React from 'react';
import { Avatar } from './index';
import { avatar } from '../../assets/image/avatar.jpeg';

export default { title: 'Components/Avatar' };
export const Overview = () => {
  return <Avatar image={avatar} mainText={'Alejandra'} />;
};
