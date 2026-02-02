import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { 
  Card,
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "./ui/card"
import Image from "next/image"
import Project from "../../public/image.png"
import Link from "next/link"

export function Kanban () {
    return(
        <Card className="flex flex-row w-full max-w-5xl mx-auto mt-20 overflow-hidden bg-gray-200 dark:bg-zinc-800 rounded-lg shadow-xl">
        
        <div className="flex flex-col justify-between p-6 w-1/2">
        
          <CardHeader className="p-0 space-y-4">
            <div className="flex gap-2">
              <Badge variant="outline">HTML</Badge>
              <Badge variant="outline">CSS</Badge>
              <Badge variant="outline">JavaScript</Badge>
              <Badge variant="outline">Node.js</Badge>
            </div>

            <CardTitle>Kanban</CardTitle>

            <CardDescription>
              Projeto fullstack desenvolvido para gerenciar um sistema acadêmico,
              permitindo o acompanhamento da utilização de salas e as disciplinas 
              ministradas em cada uma delas e quem é o professor responsável.
            </CardDescription>
          </CardHeader>

          <CardFooter className="p-0 mt-6 flex gap-4">
            <Button asChild variant="outline">
              <Link href="https://github.com/leticiaa-santos/acadspace.git" target="_blank">View Github</Link>
            </Button>
            
            <Button asChild className="underline" variant="link">
              <Link href="https://acadspace.vercel.app/" target="_blank">
                View project
              </Link>
            </Button>
        
          </CardFooter>
        
        </div>

        <div className="relative w-1/2">
          <Image
            src={Project}
            alt="Project preview"
            fill
            className="object-cover px-5"
          />
        </div>
      
      </Card>
    )
}