import { useEffect } from "react";

export default function useUiEffects() {
  useEffect(() => {
    const counters = Array.from(document.querySelectorAll(".counter"));
    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    const rippleButtons = Array.from(document.querySelectorAll(".ripple-btn"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -60px 0px"
      }
    );

    const animateCounter = (counterEl) => {
      const target = Number(counterEl.dataset.target || 0);
      const duration = 1400;
      const startTime = performance.now();

      const step = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
        counterEl.textContent = `${value}+`;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          counterEl.textContent = `${target}+`;
        }
      };
      requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    const onRipple = (event) => {
      const button = event.currentTarget;
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      const rect = button.getBoundingClientRect();

      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - rect.left - radius}px`;
      circle.style.top = `${event.clientY - rect.top - radius}px`;
      circle.classList.add("ripple");

      const oldRipple = button.querySelector(".ripple");
      if (oldRipple) oldRipple.remove();
      button.appendChild(circle);
    };

    revealEls.forEach((el) => revealObserver.observe(el));
    counters.forEach((counter) => counterObserver.observe(counter));
    rippleButtons.forEach((btn) => btn.addEventListener("click", onRipple));

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      rippleButtons.forEach((btn) => btn.removeEventListener("click", onRipple));
    };
  }, []);
}
