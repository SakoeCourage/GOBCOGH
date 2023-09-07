import Image from 'next/image'
import { Hero, Corevalues,Ourteam,Project,Partners } from './homepage'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section  */}
      <Hero />
      <Corevalues />
      <Ourteam />
      <Project />
      <Partners />

    </main>
  )
}
