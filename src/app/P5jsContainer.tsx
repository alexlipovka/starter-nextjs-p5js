'use client'; 

import React, { useEffect, useRef, useState } from "react";
import p5Types from "p5";




// components/P5jsContainer.tsx
export const P5jsContainer: P5jsContainer = ({ sketch }) => {
  const parentRef = useRef<P5jsContainerRef>();
  const [isMounted, setIsMounted] = useState<boolean>(false)

  // on mount
  useEffect(() => {
    setIsMounted(true);
  }, [])

  useEffect(() => {
    if (!isMounted) return;

    let p5instance: p5Types;
    const initP5 = async () => {
      try {
        // import the p5 and p5-sounds client-side
        const p5 = (await import("p5")).default;
        new p5((p) => {
          sketch(p, parentRef.current);
          p5instance = p;
        });
      } catch (error) {
        console.log(error);
      }
    };
    initP5();

    // return p5instance.remove();
  }, [isMounted, sketch]);

  return <div className="m-auto block h-full w-full" ref={parentRef}></div>;
  // return <></>;
};