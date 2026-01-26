import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Moldura from "../../public/mold_purple.png"

export function Welcome() {
  return (
    <section id="presentation" className="flex-1 flex items-center justify-center px-20 pt-32 mb-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl w-full items-center">
        
        <div className="w-90 h-90 flex items-end justify-end p-4">
          <Image 
            src={Moldura}
            alt=""/>
        </div>

        <div>
          <h2 className="text-6xl font-bold">
            Oi, eu sou Letícia
          </h2>

          <h3 className="text-4xl text-zinc-400 mt-2">
            Web Developer
          </h3>

          <div className="flex gap-2 mt-6 flex-wrap">
            <Badge className="text-2xl devicon-html5-plain"></Badge>
            <Badge className="text-2xl devicon-css3-plain"></Badge>
            <Badge className="text-2xl devicon-javascript-plain"></Badge>
            <Badge className="text-2xl devicon-react-original"></Badge>
            <Badge className="text-4xl devicon-nextjs-original-wordmark"></Badge>
            <Badge className="text-2xl devicon-python-plain"></Badge>
            <Badge className="text-2xl devicon-django-plain"></Badge>
          </div>
        </div>

      </div>
    </section>
  )
}
