import React from 'react';
import { H2 } from '../H2';
import { Card } from './index';

export default {
  title: 'Components/Card',
  argTypes: {
    palette: { control: { type: 'select', options: ['primary', 'secondary'] } },
  },
};
export const Overview = (args) => {
  return (
    <Card {...args}>
      <i className="icon"></i>
      <H2 style={{ fontSize: '16px' }}>location</H2>
      <p>Mayra</p>
    </Card>
  );
};
Overview.args = {
  shadow: true,
  palette: 'primary',
  border: true,
};
