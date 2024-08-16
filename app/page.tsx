import About from '@/components/About'
import Approach from '@/components/Approach'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import FloatingNavbar from '@/components/ui/FloatingNavbar'
import WorkExperienceComponent from '@/components/WorkExperience'
import { navItems } from '@/constants'
import Image from 'next/image'

const HomePage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/logos/logo.png"}
            alt='logo_img'
            width={50}
            height={50}
            className='object-contain z-50 pt-5'
          />
        </div>

        <FloatingNavbar 
          navItems={navItems} 
        />
        <Hero />
        <About />
        <RecentProjects />
        <WorkExperienceComponent />
        <Approach />
        <Footer />
      </div>
    </main>
  )
}

export default HomePage