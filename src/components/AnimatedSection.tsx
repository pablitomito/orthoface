import React, { CSSProperties } from 'react';
import { useInView } from '../hooks/useInView';
import { useReducedMotion } from '../hooks/useReducedMotion';

export type AnimVariant =
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scaleIn'
  | 'fade';

interface AnimatedSectionProps {
  children: React.ReactNode;
  /** Animation direction/style. Default: 'fadeUp' */
  variant?: AnimVariant;
  /** Delay before animation starts (ms). Default: 0 */
  delay?: number;
  /** Animation duration (ms). Default: 580 */
  duration?: number;
  /** Additional CSS classes passed to the wrapper element. */
  className?: string;
  /** Fraction of element visible to trigger. Default: 0.12 */
  threshold?: number;
  /** HTML tag to render. Default: 'div' */
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'span' | 'li' | 'p';
}

const HIDDEN_TRANSFORM: Record<AnimVariant, string> = {
  fadeUp: 'translateY(24px)',
  fadeDown: 'translateY(-20px)',
  fadeLeft: 'translateX(28px)',
  fadeRight: 'translateX(-28px)',
  scaleIn: 'scale(0.94)',
  fade: 'none',
};

/**
 * Wraps children in a single element that fades/slides in when the element
 * enters the viewport. Respects prefers-reduced-motion automatically.
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 580,
  className = '',
  threshold = 0.12,
  as: Tag = 'div',
}) => {
  const [ref, inView] = useInView({ threshold, once: true });
  const reduced = useReducedMotion();

  const hiddenTransform = HIDDEN_TRANSFORM[variant];
  const hasTransform = hiddenTransform !== 'none';

  const style: CSSProperties = reduced
    ? {} // content immediately visible — no style overrides needed
    : {
        opacity: inView ? 1 : 0,
        transform: inView || !hasTransform ? 'none' : hiddenTransform,
        transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1), transform ${duration}ms cubic-bezier(0.4,0,0.2,1)`,
        transitionDelay: `${delay}ms`,
      };

  // We use any here because TypeScript can't narrow JSX.IntrinsicElements
  // based on the `as` string prop without complex overloads.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Element = Tag as any;

  return (
    <Element ref={ref} className={className} style={style}>
      {children}
    </Element>
  );
};
