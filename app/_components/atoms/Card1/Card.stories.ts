import type { Meta, StoryObj } from '@storybook/react';
// import Button from './Card';
import Card from './Card';

const meta = {
  title: 'Example/CustomCard',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryCardVariant1: Story = {
  args: {
    title:'Primary Card',
    buttonText:'show',
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, eos.',
    type:'primary',
    image:'https://i.insider.com/60638bd66183e1001981966a?width=1136&format=jpeg'
    },
};

export const SecondaryCardVariant1: Story = {
  args: {
    title:'Secondary Card',
    buttonText:'show',
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, eos.',
    type:'secondary',
    image:'https://i.insider.com/60638bd66183e1001981966a?width=1136&format=jpeg'
    },
  }

