import { Meta } from '@storybook/react';
import { useState } from 'react';

import * as IconsModule from './index';
import styles from './Icon.stories.module.css';

const meta: Meta<typeof icons[0]> = {
  title: 'Components/Icons',
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
};

const icons = Object.values(IconsModule);

export const Icons = () => {
  const [filter, setFilter] = useState('');

  const filteredIcons = icons.filter((IconComponent) =>
    IconComponent.displayName?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.storyWrapper}>
      {/* TODO: Заменить на кастомный компонент Input */}
      <label>
        Название иконки
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </label>
      <div className={styles.flexContainer}>
        {filteredIcons.map((Component) =>
          <div key={Component.displayName} className={styles.iconInfo}>
            <Component />
            <span>{Component.displayName}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default meta;
