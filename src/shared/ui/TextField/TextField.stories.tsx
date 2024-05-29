import { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';
import { EyeIcon, LockIcon } from '../Icons';

const meta: Meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof TextField>;

export const Playground: Story = {
  args: {
    helperText: 'Введите пароль',
    label: 'Пароль',
    placeholder: '^[A-Za-z\\d]{8,}$',
    required: true,
    rIcon: <EyeIcon />,
    lIcon: <LockIcon />,
  },
};

export default meta;
