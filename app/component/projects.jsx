import equipmenttracker from "../../public/EquipmentTracker.png";
import ProjectCard from "./project-card";

const projects = [
  {
    title: "Department Equipment tracker",
    description:
      "A practical equipment management system for tracking department assets, inventory, and equipment status with ease.",
    image: equipmenttracker,
    stack: ["React", "TypeScript", "shadcn/ui", "Python", "Supabase"],
    demo: "https://equipment-tracker-o6t7.vercel.app/",
    github: "https://github.com/minmyatthuraaung/Equipment-Tracker",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl scroll-mt-28 sm:px-6 lg:px-12 lg:py-24"
    >
      <div className="mb-8 flex justify-center sm:mb-10">
        <h2 className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300 sm:text-sm">
          <span className="h-px w-7 bg-linear-to-r from-pink-400 to-violet-400" />
          Featured Projects
          <span className="h-px w-7 bg-linear-to-l from-pink-400 to-violet-400" />
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
