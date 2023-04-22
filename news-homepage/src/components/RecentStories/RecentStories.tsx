/* eslint-disable jsx-a11y/anchor-is-valid */
import { RECENT_STORIES } from "../../data";

function RecentStories() {
  return (
    <div className="col-span-2 bg-black px-5 py-6 md:col-span-1 md:px-6 md:py-8">
      <h2 className="text-md font-bold text-yellow">New</h2>
      <div className="mt-[35px] flex flex-col gap-[29px] divide-y divide-darkGray">
        {RECENT_STORIES.map(({ id, headline, subhead }) => (
          <article key={id} className="pt-7 first:pt-0">
            <a href="#" className="group">
              <h3 className="text-sm font-extrabold text-white transition-colors group-hover:text-yellow">
                {headline}
              </h3>
            </a>
            <p className="mt-2 text-base text-gray">{subhead}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default RecentStories;
