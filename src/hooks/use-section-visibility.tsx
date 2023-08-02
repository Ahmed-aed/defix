import { useEffect, useRef, useState } from 'react';

export const useSectionVisibility = () => {
  const targetSectionRef = useRef<HTMLElement>(null);
  const [isSectionVisible, setSectionVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    if (targetSectionRef.current) {
      observer.observe(targetSectionRef.current);
    }

    return () => {
      if (targetSectionRef.current) {
        observer.unobserve(targetSectionRef.current);
      }
    };
  }, []);

  return { isSectionVisible, targetSectionRef };
};
