import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Main } from './main.component';

export default {
  title: 'Main',
  component: Main
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'exemplo'
};
