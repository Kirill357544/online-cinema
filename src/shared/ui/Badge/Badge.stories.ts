import { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Badge>;

export const Playground: Story = {
  args: {
    title: 'Badge',
    variant: 'neutral',
  },
};


export default meta;
