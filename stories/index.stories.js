import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from "../src/shared/src/button.js";

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('clicked')}>Click me</Button>)
  .add('outline', () => <Button onClick={action('clicked')}>Or click me</Button>);

