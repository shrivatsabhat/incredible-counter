import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MsgType, Toast } from './index';

export default {
  title: 'Atoms/Toast',
  component: Toast,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F8F8F8' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = args => <Toast {...args} />;

export const Info = Template.bind({});
Info.args = {
  type: MsgType.INFO,
  children: 'Lorem ipsum dolor sit amet.',
};

export const Warn = Template.bind({});
Warn.args = {
  type: MsgType.WARN,
  children: 'Lorem ipsum dolor sit amet.',
};

export const Error = Template.bind({});
Error.args = {
  type: MsgType.ERROR,
  children: 'Lorem ipsum dolor sit amet.',
};

export const WithCustomTag = Template.bind({});
Error.args = {
  tag: 'Custom',
  children: 'Lorem ipsum dolor sit amet.',
};
