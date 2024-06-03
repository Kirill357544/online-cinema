import { Meta, StoryObj } from '@storybook/react';

import { PlusIcon } from '@shared/ui/Icons';

import { IconButton } from './IconButton';

const meta: Meta = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof IconButton>;

export const Playground: Story = {
  args: {
    icon: <PlusIcon />,
  },
};

export default meta;
