"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);
  return null;
}

export function AnimationProvider({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-clay"
        style={{ scaleX: reduce ? scrollYProgress : progress }}
      />
      {reduce ? (
        children
      ) : (
        <ReactLenis
          root
          options={{
            autoRaf: true,
            duration: 1.05,
            smoothWheel: true,
            anchors: true,
          }}
        >
          <ScrollReset />
          {children}
        </ReactLenis>
      )}
    </>
  );
}

type RevealProps = HTMLMotionProps<"div"> & {
  as?: "div" | "article";
  children: ReactNode;
};
export function Reveal({ children, as = "div", ...props }: RevealProps) {
  const reduce = useReducedMotion();
  const Element = as === "article" ? motion.article : motion.div;
  return (
    <Element
      {...props}
      data-reveal
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Element>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      data-reveal
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0 : 0.35 }}
    >
      {children}
    </motion.div>
  );
}
