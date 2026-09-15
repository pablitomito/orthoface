import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  /** Fraction of the element that must be visible to trigger. Default: 0.12 */
  threshold?: number;
  /** Root margin offset. Default: '0px' */
  rootMargin?: string;
  /** If true (default), disconnects observer after first trigger. */
  once?: boolean;
}

/**
 * Returns [ref, inView].
 * Attach ref to the element you want to observe.
 * inView becomes true when the element crosses the threshold.
 */
export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.12, rootMargin = '0px', once = true } = options;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView] as const;
}
