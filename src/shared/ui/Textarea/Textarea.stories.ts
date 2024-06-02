import { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Textarea>;

export const Playground: Story = {
  args: {
    label: 'Label',
    helperText: 'Helper text',
    required: true,
    autoResize: true,
    placeholder: 'Placeholder',
  },
};

export default meta;
