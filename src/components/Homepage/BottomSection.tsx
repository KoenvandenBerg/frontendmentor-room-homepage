export default function BottomSection() {
  return (
    <div className="flex-shrink-0 flex flex-col md:flex-row h-[30%]">
      <img
        className="w-full md:w-[30%] object-cover place-content-center"
        src="/images/image-about-dark.webp"
        alt=""
      />
      <section className="w-full md:w-[40%] py-[3.75rem] px-[3rem] flex flex-col items-center justify-center">
        <div className="w-full max-w-[30.25rem] tracking-[-0.025rem]">
          <h2 className="text-[1.1rem] font-bold uppercase tracking-[0.3125rem] mb-2">
            About our furniture
          </h2>
          <p className="text-light-gray leading-[1.375rem]">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
      </section>
      <img
        className="w-full md:w-[30%] object-cover place-content-center"
        src="/images/image-about-light.webp"
        alt=""
      />
    </div>
  );
}
