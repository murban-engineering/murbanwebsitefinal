import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  textClassName?: string;
  underlineClassName?: string;
  underlinePath?: string;
  underlineHoverPath?: string;
  underlineDuration?: number;
}

const AnimatedText = React.forwardRef<HTMLDivElement, AnimatedTextProps>(
  (
    {
      text,
      textClassName,
      underlineClassName,
      underlinePath = "M 0,10 Q 75,0 150,10 Q 225,20 300,10",
      underlineHoverPath = "M 0,10 Q 75,20 150,10 Q 225,0 300,10",
      underlineDuration = 1.5,
      ...props
    },
    ref
  ) => {
    const pathRef = React.useRef<SVGPathElement | null>(null);
    const [hovered, setHovered] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
      setVisible(true);
    }, []);

    React.useEffect(() => {
      const path = pathRef.current;
      if (!path) return;

      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.getBoundingClientRect();

      const timeout = window.setTimeout(() => {
        path.style.transition = `stroke-dashoffset ${underlineDuration}s ease-in-out, d 0.8s ease-in-out`;
        path.style.strokeDashoffset = "0";
      }, 50);

      return () => window.clearTimeout(timeout);
    }, [underlineDuration, underlinePath]);

    React.useEffect(() => {
      const path = pathRef.current;
      if (!path) return;
      path.style.transition = `stroke-dashoffset ${underlineDuration}s ease-in-out, d 0.8s ease-in-out`;
    }, [underlineDuration]);

    return (
      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn("flex flex-col items-center justify-center gap-2", props.className)}
      >
        <div className="relative">
          <h1
            className={cn(
              "text-4xl font-bold text-center transition-transform duration-300 ease-out",
              visible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0",
              hovered ? "scale-[1.02]" : "scale-100",
              textClassName
            )}
          >
            {text}
          </h1>

          <svg
            width="100%"
            height="20"
            viewBox="0 0 300 20"
            className={cn("absolute -bottom-4 left-0", underlineClassName)}
          >
            <path
              ref={pathRef}
              d={hovered ? underlineHoverPath : underlinePath}
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    );
  }
);

AnimatedText.displayName = "AnimatedText";

const DefaultDemo = () => {
  return <AnimatedText text="Namaste World!" />;
};

const CustomStyleDemo = () => {
  return (
    <AnimatedText
      text="Namaste World!"
      textClassName="text-5xl font-bold mb-2"
      underlinePath="M 0,10 Q 75,0 150,10 Q 225,20 300,10"
      underlineHoverPath="M 0,10 Q 75,20 150,10 Q 225,0 300,10"
      underlineDuration={1.5}
    />
  );
};

export { AnimatedText, DefaultDemo, CustomStyleDemo };
