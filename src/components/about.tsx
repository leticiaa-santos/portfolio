import Image from "next/image"
import Perfil from "../../public/mold_purple.png"

export function About() {
  return(
    <div id="about">
      <p className="text-center mt-20 font-bold text-6xl">
        About
      </p>
      <section className="flex-1 flex items-center justify-center px-20">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl w-full items-center">
          
          <div className="w-90 h-90 flex items-end justify-end p-4">
            <Image 
              src={Perfil}
              alt=""/>
          </div>

          

          <div>

            <p className="text-xl text-zinc-400 mt-2">
              Eu sou 
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}