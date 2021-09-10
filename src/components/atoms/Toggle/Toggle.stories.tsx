import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toggle } from './index';

export default {
  title: 'Atoms/Toggle',
  component: Toggle,
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
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = args => <Toggle {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
