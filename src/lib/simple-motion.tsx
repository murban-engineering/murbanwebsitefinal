import { forwardRef, useEffect, useRef } from "react";

type MotionPathProps = React.SVGProps<SVGPathElement> & {
  initial?: {
    pathLength?: number;
  };
  animate?: {
    pathLength?: number;
  };
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string;
  };
};

const MotionPath = forwardRef<SVGPathElement, MotionPathProps>((props, ref) => {
  const { initial, animate, transition, style, ...rest } = props;
  const innerRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const element = innerRef.current;
    if (!element || !element.getTotalLength) {
      return;
    }

    const length = element.getTotalLength();
    const duration = transition?.duration ?? 1.25;
    const delay = transition?.delay ?? 0;
    const ease = transition?.ease === "easeOut" ? "cubic-bezier(0.0, 0, 0.2, 1)" : "ease";

    element.style.strokeDasharray = `${length}`;
    if (initial?.pathLength === 0 || animate?.pathLength === 1) {
      element.style.strokeDashoffset = `${length}`;
    }

    const timeout = window.setTimeout(() => {
      element.style.transition = `stroke-dashoffset ${duration}s ${ease}`;
      element.style.strokeDashoffset = "0";
    }, delay * 1000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [initial?.pathLength, animate?.pathLength, transition?.duration, transition?.delay, transition?.ease, props.d]);

  return (
    <path
      ref={(node) => {
        innerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          // eslint-disable-next-line no-param-reassign
          (ref as React.MutableRefObject<SVGPathElement | null>).current = node;
        }
      }}
      style={{ strokeDasharray: "100%", strokeDashoffset: "100%", ...style }}
      {...rest}
    />
  );
});

MotionPath.displayName = "MotionPath";

export const motion = {
  path: MotionPath,
};

export type { MotionPathProps };
