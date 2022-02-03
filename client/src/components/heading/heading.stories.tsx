import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './heading.component';

export default {
  title: 'Heading',
  component: Heading
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Most Populars',
  color: 'white',
  lineLeft: false,
  lineBottom: false
};
