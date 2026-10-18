"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const lines = [
  "> mapping your digital infrastructure...",
  "> connecting systems...",
  "> automating repetitive work...",
  "> building your web presence...",
  "✓ system ready",
];
const content = lines.join("\n");

export function Terminal() {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(content.length);
  useEffect(() => {
    if (reduce) return;
    setCount(0);
    const timer = setInterval(
      () =>
        setCount((value) => {
          if (value >= content.length) {
            clearInterval(timer);
            return value;
          }
          return value + 1;
        }),
      26,
    );
    return () => clearInterval(timer);
  }, [reduce]);
  return (
    <div
      id="terminal-output"
      aria-label="Mapping infrastructure, connecting tools, automating workflows, and building web presence"
    >
      <div aria-hidden="true">
        {content
          .slice(0, reduce ? content.length : count)
          .split("\n")
          .map((line, index) => (
            <span
              className={`term-line ${index === lines.length - 1 ? "success" : ""}`}
              key={index}
            >
              {line || "\u00a0"}
            </span>
          ))}
      </div>
    </div>
  );
}
