import React from 'react';

export const rootDecorator = (Story) => (
  <div className='dark' id="modal">
    <Story />
  </div>
);
