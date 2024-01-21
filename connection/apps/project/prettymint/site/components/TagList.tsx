import React, { ReactNode } from 'react';
import clsx from 'clsx';

export interface TagListProps {
  className?: string;
  children: ReactNode;
}

export function TagList({ className, children }: TagListProps) {
  return (
    <ul role="list" className={clsx(className, 'flex flex-wrap gap-4')}>
      {children}
    </ul>
  );
}

interface TagListItemProps {
  className?: string;
  children: ReactNode;
}

export function TagListItem({ className, children }: TagListItemProps) {
  return (
    <li
      className={clsx(
        'rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600',
        className
      )}
    >
      {children}
    </li>
  );
}
