import React from 'react';

import { storiesOf } from '@storybook/react';
import Card from '../src/card/src/index.js';

storiesOf('Card', module)
  .add('default', () => <Card title="Card title" content="Card content"/>)
  .add('without content', () => <Card title="Card title"/>)
