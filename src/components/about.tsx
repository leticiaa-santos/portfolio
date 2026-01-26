import Image from "next/image"
import Perfil from "../../public/mold_purple.png"

export function About() {
  return(
    <div id="about" className="pt-10">
      <p className="text-center mt-20 font-bold text-6xl">
        Sobre mim
      </p>
      <section className="flex-1 flex items-center justify-center px-20">
      
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full items-center">
          
          <div className="w-90 h-90 flex items-end justify-end p-4">
            <Image 
              src={Perfil}
              alt=""/>
          </div>

          

          <div>

            <p className="text-lg mt-2 text-justify">
              Web Developer inciante nessa carreira
            </p>
            <p className="text-lg mt-2 text-justify">
              Atualmente estou trabalhando e estudando sobre tecnologias para o desenvolvimento Web, com foco em aplicações que utilizam IA
            </p>
            <p className="text-lg mt-2 text-justify">
              Atualmente estou também fazendo faculdade de TI, então meu foco é evoluir juntamente com a área tecnológica no âmbito de desenvolvimento web e IA
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}