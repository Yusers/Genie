// Parallax.js
import React from 'react';

const Parallax = ({ children }) => {
  const handleScroll = () => {
    const parallaxElements = document.querySelectorAll('.parallax-element');

    parallaxElements.forEach((element) => {
      const distanceFromTop = element.getBoundingClientRect().top;
      const speed = element.getAttribute('data-speed');

      element.style.transform = `translateY(${distanceFromTop * speed}px)`;
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div>{children}</div>;
};

export default Parallax;
