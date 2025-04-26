"use client"
import React from 'react'
import SectionHeading from './Heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks'

const About = () => {
  const { ref} = useSectionInView("About");


  return (
    <motion.section ref={ref} className='text-center mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28 '
    initial={{y: 100, opacity: 0}}
      animate={{y: 0, opacity:1}}
      transition={{ delay: 0.175}}
      id="about"
    >
     <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>A tech-savvy and competent Senior experience in <span className="font-medium">designing and developing scalable, high-performance web applications</span> across diverse industries, with a strong command over modern tech stacks including <span className="font-medium">Python, ReactJS, NodeJS, and cloud-native architectures. Seeking career advancement with an esteemed organization to leverage my extensive experience in full stack development, cloud infrastructure, and DevOps practices to architect and deliver innovative, user-centric digital solutions,</span> while continuing to grow and advance in the tech industry.</p>
      <p className='mb-3'>Skilled in optimizing user interfaces using modern frontend technologies like <span className="font-medium">ReactJS and Tailwind CSS, ensuring responsive, accessible, and user-friendly designs</span>. Focus on <span className="font-medium">performance enhancements, reducing load times, and improving customer engagement</span> by leveraging best practices in web performance optimization and SEO.</p>
    </motion.section>
  )
}

export default About
