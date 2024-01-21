import React, { ReactNode } from 'react';
import clsx from 'clsx';

import { Border } from './Border';
import { FadeIn, FadeInStagger } from './FadeIn';

interface ListProps {
  className?: string;
  children: ReactNode;
}

export const List: React.FC<ListProps> = ({ className, children }) => {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx('text-base text-neutral-600', className)}>
        {children}
      </ul>
    </FadeInStagger>
  );
};

interface ListItemProps {
  title?: string;
  children: ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ title, children }) => {
  return (
    <li className="group mt-10 first:mt-0">
      <FadeIn>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {title && (
            <strong className="font-semibold text-neutral-950">{`${title}. `}</strong>
          )}
          {children}
        </Border>
      </FadeIn>
    </li>
  );
};
