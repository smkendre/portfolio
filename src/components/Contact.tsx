"use client"
import React from 'react'
import SectionHeading from './Heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks'
import { FaPaperPlane } from 'react-icons/fa6'
import { form } from 'framer-motion/client'
import { sendEmail } from '@/actions/sendEmail'
import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'

const Contact = () => {
   const { ref} = useSectionInView("Contact");
  const { pending } = useFormStatus();
  
 

  return (
    <motion.section ref={ref} id='contact' className='scroll-mt-28 mb-20 sm:mb-28 text-center w-[min(100%, 380rem]'
    initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ duration: 1 }} viewport={{ once: true }}>
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 text-center dark:text-white/80 ">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:epper.sangita@gmail.com">
          epper.sangita@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col dark:text-black" action={async (formaData) => {
        const {data, error} = await sendEmail(formaData);

        if (error) {
          toast.error(error);
          return;
        } 
          toast.success("email sent successfully!");
        
        }}>
        <input
          type="text"
          name='name'
          placeholder="Your Name"
          className="border border-black/10 rounded-lg h-14 my-3 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
        />
        <input
          type="email"
          name='email'
          placeholder="Your Email"
          className="border border-black/10 rounded-lg h-14 my-3 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
        />
        <textarea
          placeholder="Your Message"
          name='message'
          className="border border-black/10 rounded-lg h-52 p-4 my-3 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
        ></textarea>
         <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105  disabled:scale-100 disabled:bg-opacity-65 dark:bg-white/10 dark:hover:bg-white/10"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
        </form>
    </motion.section>
  )
}

export default Contact
