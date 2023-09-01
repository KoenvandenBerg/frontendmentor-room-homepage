type CarouselButtonProps = {
  next: () => void;
  previous: () => void;
};

export default function CarouselButtons(props: CarouselButtonProps) {
  return (
    <nav className="h-[3.5rem] desktop:h-[5rem] w-[7rem] desktop:w-[10rem] flex absolute desktop:left-0 desktop:bottom-0">
      <button
        onClick={() => props.previous()}
        className="h-[3.5rem] w-[3.5rem] desktop:h-[5rem] desktop:w-[5rem] flex justify-center items-center bg-black hover:bg-dark-gray transition-colors duration-300"
      >
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 0L1 12l12 12"
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={() => props.next()}
        className="h-[3.5rem] w-[3.5rem] desktop:h-[5rem] desktop:w-[5rem] flex justify-center items-center bg-black hover:bg-dark-gray transition-colors duration-300"
      >
        <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 0l12 12L1 24"
            stroke="#FFF"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
}
