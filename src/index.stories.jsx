import React from 'react';

import { storiesOf } from '@storybook/react';

import Fail, { Test, Test2 } from '.';

storiesOf('test', module).add('test', () => (
  <div>
    <Test>This should be green</Test>
    <Test2>This should be yellow</Test2>
    <Fail>
      <Test>This should be red</Test>
      <Test2>This should be blue</Test2>
    </Fail>
  </div>
));
