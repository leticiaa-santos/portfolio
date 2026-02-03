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
import Project from "../../../public/image.png"
import Link from "next/link"

export function Petlar () {
    return(
        <Card className="flex flex-row w-full max-w-5xl mx-auto mt-20 overflow-hidden bg-gray-200 dark:bg-zinc-800 rounded-lg shadow-xl">
        <div className="relative w-1/2">
          <Image
            src={Project}
            alt="Project preview"
            fill
            className="object-cover px-5"
          />
        </div>
        
        <div className="flex flex-col justify-between p-6 w-1/2">

          <CardHeader className="p-0 space-y-4">
            <div className="flex gap-2">
              <Badge className="px-3 py-1" variant="outline">Flutter</Badge>
              <Badge className="px-3 py-1" variant="outline">Dart</Badge>
            </div>

            <CardTitle className="text-xl">PetLar</CardTitle>

            <CardDescription>
              Aplicativo móvel desenvolvido para facilitar a adoção de animais,
              conectando abrigos de animais com potenciais adotantes.
              Permite aos usuários navegar por perfis de animais disponíveis para adoção,
              obter informações detalhadas e favoritar aqueles que despertam interesse.
            </CardDescription>
          </CardHeader>

          <CardFooter className="p-0 mt-6 flex gap-4">
            <Button asChild variant="outline">
              <Link href="https://github.com/leticiaa-santos/PetLar.git" target="_blank">View Github</Link>
            </Button>
            
            <Button asChild className="underline" variant="link">
              <Link href="https://petlar.vercel.app/" target="_blank">
                View project
              </Link>
            </Button>
          </CardFooter>

        </div>

      </Card>
    )
}