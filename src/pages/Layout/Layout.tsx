import { FC, ReactNode } from 'react';

import styles from './Layout.module.css';

export type LayoutProps = {
  renderHeader?: () => ReactNode;
  renderLeftSidebar?: () => ReactNode;
  renderMain?: () => ReactNode;
  renderRightSidebar?: () => ReactNode;
  renderFooter?: () => ReactNode;
};

export const Layout: FC<LayoutProps> = ({
  renderHeader,
  renderLeftSidebar,
  renderMain,
  renderRightSidebar,
  renderFooter,
}) => {
  return (
    <>
      <div className={styles.root}>
        {renderHeader && <header>{renderHeader()}</header>}
        <div className={styles.content}>
          {renderLeftSidebar && <aside>{renderLeftSidebar()}</aside>}
          {renderMain && <main className={styles.main}>{renderMain()}</main>}
          {renderRightSidebar && <aside>{renderRightSidebar()}</aside>}
        </div>
        {renderFooter && <footer>{renderFooter()}</footer>}
      </div>
      <div id='modal' />
    </>
  );
};
