import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { 
  Card,
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "../ui/card"
import Image from "next/image"
import Project from "../../../public/kanban.png"
import Link from "next/link"

export function Kanban () {
    return(
        <Card className="flex flex-row w-full max-w-5xl mx-auto mt-20 overflow-hidden bg-gray-200 dark:bg-zinc-800 rounded-lg shadow-xl ">
        
        <div className="flex flex-col justify-between p-6 w-1/2">
        
          <CardHeader className="p-0 space-y-4">
            <div className="flex gap-2">
              <Badge className="px-3 py-1" variant="outline">Django</Badge>
              <Badge className="px-3 py-1" variant="outline">React</Badge>
              <Badge className="px-3 py-1" variant="outline">SQLite</Badge>
              <Badge className="px-3 py-1" variant="outline">Node.js</Badge>
            </div>

            <CardTitle className="text-xl">Kanban</CardTitle>

            <CardDescription>
              É um sistema de gerenciamento de projetos baseado na metodologia Kanban.
              Permite aos usuários criar, organizar e acompanhar tarefas em um quadro visual,
              facilitando a colaboração e a produtividade da equipe.
            </CardDescription>
          </CardHeader>

          <CardFooter className="p-0 mt-6 flex gap-4">
            <Button asChild variant="outline">
              <Link href="https://github.com/leticiaa-santos/kanban.git" target="_blank">View Github</Link>
            </Button>
            
            <Button asChild className="underline" variant="link">
              <Link href="https://kanban-4jna.vercel.app/" target="_blank">
                View project
              </Link>
            </Button>
        
          </CardFooter>
        
        </div>

        <div className="relative w-1/2">
          <Image
            src={Project}
            alt="Project preview"
            className="object-cover px-5"
          />
        </div>
      
      </Card>
    )
}