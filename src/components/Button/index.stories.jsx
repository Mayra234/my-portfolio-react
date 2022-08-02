import React from 'react';
import { Button } from './index';

export default { title: 'Components/Button' };
export const Overview = (args) => {
  return <Button {...args}>contáctame</Button>;
};
Overview.args = {
  palette: 'primary',
};
