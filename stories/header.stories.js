import React from 'react';

import { storiesOf } from '@storybook/react';
import Header from '../src/shared/src/header.js';

storiesOf('Header')
  .add('without subtitle', () => <Header title="Header title" />)
  .add('with subtitle', () => <Header title="Header title" subtitle="Header subtitle" />)
