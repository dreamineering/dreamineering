import React, { ReactNode, HTMLAttributes } from 'react';
import clsx from 'clsx';

import { Border } from '../components/Border';
import { FadeIn, FadeInStagger } from '../components/FadeIn';

export interface StatListProps extends HTMLAttributes<HTMLDListElement> {
  children: ReactNode;
}

export function StatList({ children, ...props }: StatListProps) {
  return (
    <FadeInStagger {...props}>
      <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
        {children}
      </dl>
    </FadeInStagger>
  );
}

interface StatListItemProps {
  label: ReactNode;
  value: ReactNode;
}

export function StatListItem({ label, value }: StatListItemProps) {
  return (
    <Border
      as={FadeIn as any} // TODO: Fix this
      position="left"
      className="flex flex-col-reverse pl-8"
    >
      <dt className="mt-2 text-base text-neutral-600">{label}</dt>
      <dd className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
        {value}
      </dd>
    </Border>
  );
}
