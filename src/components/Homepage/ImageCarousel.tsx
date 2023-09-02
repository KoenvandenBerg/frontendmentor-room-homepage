import { AnimatePresence, motion } from 'framer-motion';
import { Section } from './TopSection';

type ImageCarouselProps = {
  sections: Section[];
  currentSection: number;
};

export default function ImageCarousel(props: ImageCarouselProps) {
  return (
    <AnimatePresence>
      <div className="h-full w-full bg-dark-gray" aria-hidden>
        <motion.img
          key={props.sections[props.currentSection].image}
          src={props.sections[props.currentSection].image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          alt=""
          className="w-full h-full object-cover place-content-center"
        />
      </div>
    </AnimatePresence>
  );
}
