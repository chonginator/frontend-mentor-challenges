import { FEATURED_STORY } from "../../data";

/* eslint-disable jsx-a11y/anchor-is-valid */
function FeaturedStory() {
  const { headline, subhead, image } = FEATURED_STORY;
  return (
    <div className="col-span-2">
      <img
        className="h-[300px] w-full object-cover object-top md:w-[730px]"
        src={image.src}
        alt={image.alt}
      />
      <div className="mt-6 grid gap-4 md:mt-7 md:grid-cols-2 md:gap-[30px]">
        <h1 className="text-lg font-extrabold text-black md:text-xl">
          {headline}
        </h1>
        <div className="flex flex-col items-start justify-between gap-6">
          <p className="text-darkGray">{subhead}</p>
          <a
            className="bg-orange px-9 py-3 text-[14px] font-bold uppercase tracking-[4.38px] text-white transition-colors hover:bg-black"
            href="#"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedStory;
