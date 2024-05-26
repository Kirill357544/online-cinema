import React from 'react';
import { ArgTypes, Title, Subtitle, Description, Primary } from '@storybook/blocks';
import type { Preview } from '@storybook/react';

import '@app/styles/styles.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          < Subtitle />
          <Description />
          < Primary />
          <ArgTypes />
        </>
      ),
    },
    layout: 'centered',
  },
};

export default preview;
