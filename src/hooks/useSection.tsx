import { useState } from 'react';

export default function useSection(sections: number) {
  const [currentSection, setCurentSection] = useState(0);

  const nextSection = () => {
    setCurentSection((currentSection + 1) % sections);
  };

  const previousSection = () => {
    setCurentSection(currentSection === 0 ? sections - 1 : currentSection - 1);
  };

  return {
    currentSection,
    setCurentSection,
    nextSection,
    previousSection,
  };
}
