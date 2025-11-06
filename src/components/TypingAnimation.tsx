import { useEffect, useState, useRef, useCallback } from "react";
import { createTypingSound } from "@/lib/audio-utils";

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
  enableSound?: boolean;
}

const TypingAnimation = ({ text, className = "", speed = 50, enableSound = true }: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const playSound = useRef<(() => void) | null>(null);

  // Initialize audio
  useEffect(() => {
    if (enableSound) {
      try {
        playSound.current = createTypingSound();
      } catch (error) {
        console.warn("Audio not supported:", error);
      }
    }
  }, [enableSound]);

  // Reset animation when component mounts or text changes
  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
        
        // Play typing sound
        if (enableSound && playSound.current && text[currentIndex] !== " ") {
          try {
            playSound.current();
          } catch (error) {
            // Silently handle audio errors
          }
        }
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, enableSound]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default TypingAnimation;
