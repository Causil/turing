import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [mobile, setMobile] = useState(() => {});
  const [navbarColor, setNavbarColor] = useState(false);
  useEffect(() => {
    if (getWindowDimensions().width <= 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    //? scroll
    const handleScroll = (e) => {
      if (window.scrollY >= 80) {
        setNavbarColor(true);
      } else {
        setNavbarColor(false);
      }
    };

    //? only for dev
    function handleResize() {
      if (getWindowDimensions().width <= 960) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { mobile, navbarColor };
}
