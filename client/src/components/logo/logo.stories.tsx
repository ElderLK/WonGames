import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from './logo.component';

export default {
  title: 'Logo',
  component: Logo
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
