import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

export default function useScrollReveal(
  selector,
  origin = "top",
  duration = 1000,
  distance = "20px",
  easing = "ease-in-out"
) {
  useEffect(() => {
    if (!selector) return undefined;

    const scrollReveal = ScrollReveal();
    scrollReveal.reveal(selector, {
      duration,
      origin,
      distance,
      easing,
    });

    return () => {
      scrollReveal.clean(selector);
    };
  }, [selector, origin, duration, distance, easing]);
}
