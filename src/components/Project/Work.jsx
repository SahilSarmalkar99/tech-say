import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-[1700px] mx-auto space-y-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}