"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'
const Intro = () => {
  const { ref} = useSectionInView("Home");
const { setActiveLink, setTimeOfLastClick} = useActiveSectionContext();


  return (
    <section ref={ref} className='mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0' id='home'>
      <div className="flex items-center justify-center">
        <div className="relative">
            <motion.div 
             initial={{scale: 0, opacity: 0}}
             animate={{scale: 1, opacity:1}}
             transition={{ type: "tween", duration: 0.2}}
             >
            <Image src="/profile.png" alt="Sangita Kendre" width="100" height="100" quality="95" priority={true} className='h-24 w-24 rounded-full border-[0.35rem] object-cover shadow-xl border-white' /></motion.div>
            <motion.span className='text-4xl absolute bottom-0 right-0'
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity:1}}
            transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7}}>
                👋
            </motion.span>
                 </div>
      </div>
      <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl '
      initial={{y: 100, opacity: 0}}
      animate={{y: 0, opacity:1}}
      >
        <span className='font-bold'>Hello, I&apos;m Sangita.</span>I&apos;m a {" "}
        <span className='font-bold'>Full-stack Developer</span> with {" "}
        <span  className='font-bold'>12 years</span> of experience. I enjoy building{" "}
        <span className="italic">sites & apps.</span> My focus is {" "} <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      initial={{y: 100, opacity: 0}}
      animate={{y: 0, opacity:1}}
      transition={{ delay: 0.1 }}>
        <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 gap-2 flex items-center rounded-full  outline-none hover:scale-110 focus:scale-110 hover:bg-gray-950 active:scale-105 transition '
        onClick={() => {setActiveLink("Contact"); setTimeOfLastClick(Date.now())}}
        >Contact Me <ArrowRight className='opacity-80 group-hover:translate-x-1 transition' /></Link>

        <a href="/cv.pdf" className='group bg-white px-7 py-3 gap-2 flex items-center rounded-full outline-none hover:scale-110 focus:scale-110 active:scale-105 hover:text-gray-950  transition cursor-pointer border border-black/10  dark:bg-white/10' download>Download CV <Download className='opacity-80 group-hover:translate-y-1 transition' /></a>

        <a href="https://www.linkedin.com/in/sangita-kendre" className='bg-white p-4 gap-2 flex items-center rounded-full outline-none hover:scale-110  hover:text-gray-950 focus:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60' target='_blank'><BsLinkedin /></a>
        
        <a href="https://www.github.com/smkendre" className='bg-white p-4 gap-2 flex items-center rounded-full outline-none hover:scale-[1.15]  hover:text-gray-950  focus:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60' target='_blank'><BsGithub /></a>
      </motion.div>
    </section>
  )
}

export default Intro
