/* eslint-disable jsx-a11y/anchor-is-valid */
import { TOP_STORIES } from "../../data";

function TopStories() {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      {TOP_STORIES.map(({ id, headline, subhead, image }, index) => (
        <article key={id} className="flex gap-6">
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-[100px] object-cover"
          />
          <div className="flex flex-col gap-3">
            <span className="text-md font-bold text-gray">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <a href="#" className="group">
              <h3 className="text-xs font-extrabold text-black transition-colors group-hover:text-orange">
                {headline}
              </h3>
            </a>
            <p className="text-darkGray">{subhead}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default TopStories;
