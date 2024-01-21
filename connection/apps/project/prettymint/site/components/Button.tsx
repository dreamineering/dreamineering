import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type CommonProps = {
  invert?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type Props = ButtonProps | AnchorProps;

function isAnchorProps(props: Props): props is AnchorProps {
  return 'href' in props;
}

export const Button: React.FC<Props> = (props) => {
  const className = clsx(
    props.className,
    props.className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    props.invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
      : 'bg-neutral-950 text-white hover:bg-neutral-800'
  );

  const inner = <span className="relative top-px">{props.children}</span>;
  if (isAnchorProps(props)) {
    const { href, children, ...restProps } = props as AnchorProps; // Type casting here
    if (typeof href !== 'undefined') {
      // Check if href exists
      return (
        <Link href={href} passHref>
          <span className={className} {...restProps}>
            {inner}
          </span>
        </Link>
      );
    }
  }

  const {
    children,
    invert,
    className: _,
    ...buttonProps
  } = props as CommonProps & ButtonProps;

  return (
    <button className={className} {...buttonProps}>
      {inner}
    </button>
  );
};
