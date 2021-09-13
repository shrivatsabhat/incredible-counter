import { create } from '@storybook/theming';
import Logo from '../src/assets';
import TYPES from '../src/Types';

export default create({
  base: 'light',
  brandTitle: TYPES.TITLE,
  brandUrl: 'https://autocounter.netlify.app/#/about',
  brandImage: Logo.headerLogo,
});
