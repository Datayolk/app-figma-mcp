import type { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField';

const meta = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text inside the input',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url'],
      description: 'Input type',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Name',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Name',
    placeholder: 'Name',
    value: 'John Doe',
  },
};

export const Email: Story = {
  args: {
    label: 'Email',
    placeholder: 'Email',
    type: 'email',
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: 'Enter your name',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Name',
    placeholder: 'Name',
    disabled: true,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
  },
};

