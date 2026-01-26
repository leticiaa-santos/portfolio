import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Formation } from "@/components/formation"
import { Header } from "@/components/header"
import { Welcome } from "@/components/presentation"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100 dark:bg-zinc-900">
      <Header />
      <Welcome />
      <Skills />
      <About />
      <Formation />
      <Projects />
      <Contact />
    </main>
  )
}

export default Home
