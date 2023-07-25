import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
  return <div>AppFooter</div>;
};

export default memo(AppHeader);
