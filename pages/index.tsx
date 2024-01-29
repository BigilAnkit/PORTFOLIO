import MobileNav from '@/Components/MobileNav';
import React, { useState } from 'react'
import Nav from '../Components/Nav';
import Hero from '../Components/Hero';
import About from '@/Components/About';
import Services from '@/Components/Services';
import Skils from '@/Components/Skils';
import Projects from '@/Components/Projects';
import Testimonial from '@/Components/Testimonial';
import Blog from '@/Components/Blog';


const HomePage = () => {
 
  const [nav,setNav]=useState(false)
  const openNav =()=>setNav(true);
  const closeNav =()=> setNav(false);
  return (
    <div className='overflow-x-hidden'>
      <div>
        {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
        {/* Hero section */}
        <Hero/>
        <div className='relative z-[30]'>
        {/* About */}
        <About/>

        {/* Services */}
        <Services/>
        {/* Skills */}
         <Skils/>
         {/* Projects */}
         <Projects/>
         {/* Reviews Testimonial */}
         <Testimonial/>
         {/* Blogs */}
         <Blog/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
