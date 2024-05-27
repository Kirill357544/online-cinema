import { Meta, StoryObj } from '@storybook/react';

import { PlusIcon } from '@shared/ui/Icons';

import { Button } from './Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: 'Click me',
    lIcon: <PlusIcon />,
    rIcon: <PlusIcon />,
  },
};


export default meta;
