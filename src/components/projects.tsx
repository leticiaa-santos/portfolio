
import { Acadspace } from "./projects/acadspace"
import { Kanban } from "./projects/kanban"
import { Petlar } from "./projects/petlar"

export function Projects() {
  return(
    <section id="projects">
      <p className="text-center mt-20 font-bold text-6xl pt-10">
          Projetos
      </p>

      <Acadspace />

      <Petlar />

      <Kanban />
    
    </section>
  )
}