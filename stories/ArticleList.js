import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ActicleList from '../src/components/ArticleList';

storiesOf('ActicleList', module)
  .add('default', () => (<ActicleList />))
