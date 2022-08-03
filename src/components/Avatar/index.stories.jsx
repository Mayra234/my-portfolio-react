import React from 'react';
import { Avatar } from './index';

export default { title: 'Components/Avatar' };
export const Overview = (args) => {
  return <Avatar {...args} />;
};

Overview.args = {
  image: 'https://reactjs.org/logo-og.png',
  mainText: 'Alejandra',
};
