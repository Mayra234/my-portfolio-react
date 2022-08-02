import React from 'react';
import { H2 } from '../H2';
import { Card } from './index';

export default { title: 'Components/Card' };
export const Overview = (args) => {
  return (
    <Card>
      <i className="icon"></i>
      <H2 style={{ fontSize: '16px' }}>location</H2>
      <p>Mayra</p>
    </Card>
  );
};
