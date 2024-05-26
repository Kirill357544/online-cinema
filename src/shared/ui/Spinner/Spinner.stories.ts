import { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './Spinner';

const meta: Meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Spinner>;

export const Playground: Story = {
  args: {
    size: 'medium',
  },
};

export default meta;
