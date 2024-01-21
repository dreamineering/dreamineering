import { ImgHTMLAttributes, ReactNode, TableHTMLAttributes } from 'react';
import clsx from 'clsx';

import { Blockquote, BlockquoteProps } from '../components/Blockquote';
import { Border } from '../components/Border';
import {
  GrayscaleTransitionImage,
  GrayscaleTransitionImageProps,
} from '../components/GrayscaleTransitionImage';
import { StatList, StatListItem, StatListProps } from '../components/StatList';
import { TagList, TagListItem, TagListProps } from '../components/TagList';

interface WrapperProps {
  className?: string;
  children?: ReactNode; // Add this line
}

interface TopTipProps {
  className?: string;
  children: ReactNode;
}

interface TypographyProps {
  className?: string;
}

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  className?: string;
}

interface ImgProps extends GrayscaleTransitionImageProps {
  className?: string;
}

export const MDXComponents = {
  Blockquote({ className, ...props }: BlockquoteProps) {
    return <Blockquote className={clsx('my-32', className)} {...props} />;
  },
  img: function Img({ className, ...props }: ImgProps) {
    return (
      <div
        className={clsx(
          'rounded-4xl group isolate my-10 overflow-hidden bg-neutral-100 max-sm:-mx-6',
          className
        )}
      >
        <GrayscaleTransitionImage
          {...props}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
    );
  },
  StatList({ className, ...props }: StatListProps) {
    return (
      <StatList className={clsx('my-32 !max-w-none', className)} {...props} />
    );
  },
  StatListItem,
  table: function Table({ className, ...props }: TableProps) {
    return (
      <div
        className={clsx(
          'my-10 max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto',
          className
        )}
      >
        <div className="max-sm:min-w-full max-sm:flex-none max-sm:px-6">
          <table {...props} />
        </div>
      </div>
    );
  },
  TagList({ className, ...props }: TagListProps) {
    return <TagList className={clsx('my-6', className)} {...props} />;
  },
  TagListItem,
  TopTip({ className, children }: TopTipProps) {
    return (
      <Border position="left" className={clsx('my-10 pl-8', className)}>
        <p className="font-display text-sm font-bold uppercase tracking-widest text-neutral-950">
          Top tip
        </p>
        <div className="mt-4">{children}</div>
      </Border>
    );
  },
  Typography({ className, ...props }: TypographyProps) {
    return <div className={clsx('typography', className)} {...props} />;
  },
  wrapper({ className, ...props }: WrapperProps) {
    return (
      <div
        className={clsx(
          '[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0',
          className
        )}
        {...props}
      />
    );
  },
};
