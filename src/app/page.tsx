import AboutMe from '@/components/ui/AboutMe'
import Contact from '@/components/ui/Contact'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/ui/Hero'
import Navbar from '@/components/ui/Navbar'
import Projects from '@/components/ui/Project'
import Skills from '@/components/ui/Skills'
import React from 'react'

const page = () => {
  return (
    <div>
   <Navbar />
   <br /><br />
   <br />
   <Hero />
   <br /><br />
   <AboutMe />
   <br /><br />
   <Skills />
   
   <Projects />
   <Contact />
   <br /><br />
   <Footer />
    </div>
  )
}

export default page
