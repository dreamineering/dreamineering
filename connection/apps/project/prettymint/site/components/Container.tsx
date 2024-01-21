import React, { ReactNode, ReactElement } from 'react';
import clsx from 'clsx';

export interface ContainerProps {
  as?: keyof JSX.IntrinsicElements; // Could be 'div', 'section', etc.
  className?: string;
  children: ReactNode;
}

export function Container({
  as: Component = 'div',
  className,
  children,
}: ContainerProps): ReactElement {
  return (
    <Component className={clsx('mx-auto max-w-7xl px-6 lg:px-8', className)}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </Component>
  );
}
