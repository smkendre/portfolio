"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { useScroll, motion, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data'

type ProjectProps = (typeof projectsData)[number];

const ProjectItem = ({title, description, tags, imageUrl}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["0 1","1.33 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.div
    ref={ref}
    style={{
      scale: scaleProgress,
      opacity: opacityProgress
    }} 
    className='mb-3 sm:mb-8 last:mb-0 group'
    
    >
      
    <section 
    
    className=' bg-gray-100 max-w-[52rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]  hover:bg-gray-200 transition sm:group-even:pl-8 rounded-lg  dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
      <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
      <h3 className='text-2xl font-semibold'>{title}</h3>
      <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
      <ul className='flex flex-wrap gap-2 mt-auto'>
        {
          tags.map((tag, index) => (
            <li key={index} className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'>{tag}</li>
          ))
        }
      </ul>
      </div>
      <Image src={imageUrl} alt={title} quality={95} className='absolute hidden sm:block  bottom-0 -right-40 w-[24.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:-rotate-2'  />
    </section>
    
    </motion.div>
  )
}

export default ProjectItem
