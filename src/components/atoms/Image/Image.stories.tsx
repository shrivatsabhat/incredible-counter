import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from './index';

export default {
  title: 'Atoms/Image',
  component: Image,
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
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = args => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
