import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ServicesFirstPage from "./ServicesFirstPage";
import ServicesSecondPage from "./ServicesSecondPage";
import ServicesThirdPage from "./ServicesThirdPage";
import ServicesFourthPage from "./ServicesFourthPage";

export default function Services() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (sectionRef.current && triggerRef.current) {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );
      // Cleanup function
      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <div className="overflow-x-scroll">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="relative flex h-svh w-[400vw]">
          <ServicesFirstPage />
          <ServicesSecondPage />
          <ServicesThirdPage />
          <ServicesFourthPage />
        </div>
      </div>
    </div>
  );
}
