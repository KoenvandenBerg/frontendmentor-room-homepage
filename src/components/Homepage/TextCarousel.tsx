import { Section } from './TopSection';

type TextCarouselProps = {
  sections: Section[];
  currentSection: number;
};

export default function TextCarousel(props: TextCarouselProps) {
  return (
    <div className="h-full w-full  py-14 px-8 desktop:px-[6rem] flex justify-center items-center">
      <div className="max-w-[25rem]">
        <h1 className="mb-4 text-[2.5rem] desktop:text-[3rem] font-[600] leading-[2.5rem] desktop:leading-[3rem] tracking-[-0.1rem] desktop:tracking-[-0.125rem]">
          {props.sections[props.currentSection].title}
        </h1>
        <p className="mb-6 text-light-gray leading-[1.375rem]">
          {props.sections[props.currentSection].paragraph}
        </p>
        <button className="group flex gap-4 items-center hover:text-light-gray hover:path-light-gray transition-colors duration-300">
          <p className="text-[0.9375rem] tracking-[0.75rem] uppercase">
            Shop now
          </p>
          <svg width="50" height="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
              fill="#000"
              fillRule="nonzero"
              className="group-hover:fill-light-gray transition-all duration-300 group-hover:translate-x-1"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
