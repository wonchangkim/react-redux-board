import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ActicleForm from '../src/components/ArticleForm';

storiesOf('ActicleForm', module)
  .add('default', () => (<ActicleForm onSubmit={action('onSubmit')} />))
  .add('error message', () => (<ActicleForm errorMessage="필드를 모두 채워야 합니다." />));
