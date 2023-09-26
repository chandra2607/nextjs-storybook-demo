import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Example/CustomButton',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullWidthButton: Story = {
  args: {
    children:"Full Width Button",
    padding:'buttonPaddingXsmall',
    backgroundColor:'buttonPrimaryBg',
    size:'buttonFull'
  },
};

export const Primary: Story = {
  args: {
    children:"Primary Button",
    padding:'buttonPaddingMedium',
    backgroundColor:'buttonPrimaryBg',
    size:'buttonFit'
  },
};

export const Secondary: Story = {
  args: {
    children:"Secondary Button",
    padding:'buttonPaddingMedium',
    backgroundColor:'buttonSecondaryBg',
    size:'buttonFit'
  },
};
