import { ProjectProps } from "./ProjectProps";
import { projectBackgroundClasses } from "./projectBackgroundClasses";

function Project({ name, title }: ProjectProps) {
  const mobileBgClass = projectBackgroundClasses[name]["mobile"];
  const desktopBgClass = projectBackgroundClasses[name]["desktop"];

  const titleWithLineBreaks = title.split("\\n").map((line) => (
    <span className="block" key={crypto.randomUUID()}>
      {line}
    </span>
  ));

  return (
    <div
      className={`${mobileBgClass} ${desktopBgClass} group relative flex min-h-[120px] cursor-pointer items-end bg-cover bg-no-repeat px-5 py-4 bg-blend-overlay mix-blend-overlay transition-colors before:absolute before:inset-0 before:bg-project-gradient-overlay-mobile before:bg-cover before:bg-no-repeat hover:bg-white/75 hover:before:bg-none md:min-h-[450px] lg:px-9 lg:py-7 lg:before:bg-project-gradient-overlay-desktop`}
    >
      <h3 className="isolate text-left font-heading text-2xl font-light uppercase text-white group-hover:text-black lg:text-3xl">
        {titleWithLineBreaks}
      </h3>
    </div>
  );
}

export default Project;
