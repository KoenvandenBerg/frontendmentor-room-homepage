import { useEffect } from 'react';
import useSection from '../../hooks/useSection';
import CarouselButtons from './CarouselButtons';
import ImageCarousel from './ImageCarousel';
import TextCarousel from './TextCarousel';

export type Section = {
  title: string;
  paragraph: string;
  image: string;
};

const sections: Section[] = [
  {
    title: 'Discover innovative ways to decorate',
    paragraph:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    image: '/images/desktop-image-hero-1.jpg',
  },
  {
    title: 'We are available all across the globe',
    paragraph:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    image: '/images/desktop-image-hero-2.jpg',
  },
  {
    title: 'Manufactured with the best materials',
    paragraph:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    image: '/images/desktop-image-hero-3.jpg',
  },
];

export default function TopSection() {
  const { currentSection, nextSection, previousSection } = useSection(3);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSection();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSection]);

  return (
    <section className="h-[70%] flex flex-col desktop:flex-row">
      <div className="flex-shrink-0 w-full desktop:w-[calc(70%-10rem)]">
        <ImageCarousel sections={sections} currentSection={currentSection} />
      </div>
      <div className="relative w-full desktop:w-[calc(30%+10rem)] flex-shrink-0">
        <TextCarousel sections={sections} currentSection={currentSection} />
        <CarouselButtons next={nextSection} previous={previousSection} />
      </div>
    </section>
  );
}
