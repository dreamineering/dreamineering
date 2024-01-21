'use client';

import React, {
  createContext,
  useContext,
  FC,
  HTMLProps,
  ReactNode,
} from 'react';
import {
  MotionProps,
  motion,
  useReducedMotion,
  AnimationDefinition,
  PanInfo,
} from 'framer-motion';

const viewport = { once: true, margin: '0px 0px -200px' };

const FadeInStaggerContext = createContext<boolean>(false);

type SelectedMotionProps = Pick<MotionProps, 'initial' | 'animate' | 'exit'>; // Add any other MotionProps you are using
type SelectedHtmlDivProps = Pick<
  HTMLProps<HTMLDivElement>,
  'className' | 'style'
>; // Add any other HTMLProps you are using

export interface FadeInProps extends SelectedMotionProps, SelectedHtmlDivProps {
  // onAnimationStart?: AnimationEventHandler<HTMLDivElement>;
  onAnimationStart?: (definition: AnimationDefinition) => void;
  children?: ReactNode;
}

export const FadeIn: FC<FadeInProps> = ({ onAnimationStart, ...props }) => {
  let shouldReduceMotion = useReducedMotion();
  let isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    />
  );
};

type MotionPropsWithoutConflicts = Omit<
  MotionProps,
  'onDragStart' | 'onAnimationStart' | 'onDrag' | 'onDragEnd'
>;
type DivPropsWithoutConflicts = Omit<
  HTMLProps<HTMLDivElement>,
  'onDragStart' | 'onAnimationStart' | 'onDrag' | 'onDragEnd'
>;

interface FadeInStaggerProps {
  id?: string;
  className?: string;
  faster?: boolean;
  children?: ReactNode;
  motionProps?: MotionPropsWithoutConflicts;
  divProps?: DivPropsWithoutConflicts;
  // onDragStart?: (
  //   event: MouseEvent | TouchEvent | PointerEvent,
  //   info: PanInfo
  // ) => void;
  onDragStart?:
    | React.DragEventHandler
    | ((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void);
}

export const FadeInStagger: FC<FadeInStaggerProps> = ({
  id,
  className,
  faster = false,
  children,
  motionProps = {},
  divProps = {},
}) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        className={className}
        id={id}
        {...motionProps}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
};
