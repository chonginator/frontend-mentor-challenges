import { ProjectNames } from "./ProjectProps";

type ProjectBackgroundClasses = Record<
  ProjectNames,
  { mobile: string; desktop: string }
>;

export const projectBackgroundClasses: ProjectBackgroundClasses = {
  "deep-earth": {
    mobile: "bg-project-deep-earth-mobile",
    desktop: "md:bg-project-deep-earth-desktop",
  },
  "night-arcade": {
    mobile: "bg-project-night-arcade-mobile",
    desktop: "md:bg-project-night-arcade-desktop",
  },
  "soccer-team": {
    mobile: "bg-project-soccer-team-mobile",
    desktop: "md:bg-project-soccer-team-desktop",
  },
  grid: {
    mobile: "bg-project-grid-mobile",
    desktop: "md:bg-project-grid-desktop",
  },
  "from-above": {
    mobile: "bg-project-from-above-mobile",
    desktop: "md:bg-project-from-above-desktop",
  },
  "pocket-borealis": {
    mobile: "bg-project-pocket-borealis-mobile",
    desktop: "md:bg-project-pocket-borealis-desktop",
  },
  curiosity: {
    mobile: "bg-project-curiosity-mobile",
    desktop: "md:bg-project-curiosity-desktop",
  },
  fisheye: {
    mobile: "bg-project-fisheye-mobile",
    desktop: "md:bg-project-fisheye-desktop",
  },
};
