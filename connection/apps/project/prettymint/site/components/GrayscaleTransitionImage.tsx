'use client';

import { useRef, RefObject, ImgHTMLAttributes } from 'react';
import Image, { ImageProps } from 'next/image';
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';

export interface GrayscaleTransitionImageProps extends ImageProps {
  // Add any other props specific to this component here
}

export function GrayscaleTransitionImage(props: GrayscaleTransitionImageProps) {
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 35%'],
  });
  let grayscale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1]);
  let filter = useMotionTemplate`grayscale(${grayscale})`;

  return (
    <div ref={ref} className="group relative">
      <motion.div style={{ filter }}>
        <Image
          alt={props.alt}
          src={props.src}
          height={props.height}
          width={props.width}
        />
      </motion.div>
      <div
        className="pointer-events-none absolute left-0 top-0 w-full opacity-0 transition duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        {/* <Image alt={props.alt} src={props.src} {...props} /> */}
        <Image
          alt={props.alt}
          src={props.src}
          height={props.height}
          width={props.width}
        />
      </div>
    </div>
  );
}
