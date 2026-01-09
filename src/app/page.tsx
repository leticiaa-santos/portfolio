import { Header } from "@/components/header"
import { Welcome } from "@/components/presentation"
import { Skills } from "@/components/skills"

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col bg-gray-100 dark:bg-zinc-900">
      <Header />
      <Welcome />
      <Skills />
    </main>
  )
}

export default Home
