import React, { CSSProperties } from 'react';
import { useInView } from '../hooks/useInView';
import { useReducedMotion } from '../hooks/useReducedMotion';
import type { AnimVariant } from './AnimatedSection';

interface StaggerContainerProps {
  children: React.ReactNode;
  /** Delay increment between each child (ms). Default: 60 */
  staggerMs?: number;
  /** Animation variant applied to each child. Default: 'fadeUp' */
  variant?: AnimVariant;
  /** Duration for each child's animation (ms). Default: 560 */
  duration?: number;
  /** Additional CSS classes on the wrapper div. */
  className?: string;
  /** Fraction of wrapper visible to trigger. Default: 0.08 */
  threshold?: number;
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
 * Wraps direct children with staggered entrance animations.
 * Each child receives an incremental transitionDelay based on its index.
 * Respects prefers-reduced-motion (all children appear instantly when reduced).
 *
 * NOTE: Uses React.cloneElement to inject animation styles — no extra DOM
 * wrapper elements are added, so CSS rules like divide-y, gap, etc. work normally.
 */
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerMs = 60,
  variant = 'fadeUp',
  duration = 560,
  className = '',
  threshold = 0.08,
}) => {
  const [ref, inView] = useInView({ threshold, once: true });
  const reduced = useReducedMotion();

  const hiddenTransform = HIDDEN_TRANSFORM[variant];
  const hasTransform = hiddenTransform !== 'none';

  const items = React.Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => {
        if (!React.isValidElement(child)) return child;

        const animStyle: CSSProperties = reduced
          ? {}
          : {
              opacity: inView ? 1 : 0,
              transform: inView || !hasTransform ? 'none' : hiddenTransform,
              transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1), transform ${duration}ms cubic-bezier(0.4,0,0.2,1)`,
              transitionDelay: inView ? `${i * staggerMs}ms` : '0ms',
            };

        // Preserve the child's existing inline styles, then overlay animation styles
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const existingStyle = (child.props as any).style || {};
        const mergedStyle: CSSProperties = { ...existingStyle, ...animStyle };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return React.cloneElement(child as React.ReactElement<any>, {
          style: mergedStyle,
        });
      })}
    </div>
  );
};
