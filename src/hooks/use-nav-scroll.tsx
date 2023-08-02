import { useState, useEffect } from 'react';

const useNavScroll = (navRef: HTMLElement) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const sticky = navRef.offsetTop;

    // Check if the user has scrolled past the navbar's position
    setIsSticky(window.pageYOffset >= sticky);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useNavScroll;
