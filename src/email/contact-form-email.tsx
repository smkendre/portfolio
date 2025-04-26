import React from 'react'
import{ Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components'
import { Tailwind } from '@react-email/components'
import { ContactFormEmailProps } from '@/lib/types'

const ContactFormEmail = ({name, email, message}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message Form Portfolio</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black'>
          <Container className='mx-auto max-w-3xl px-4 py-8'>
            <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight text-2xl font-bold'>New Contact Form Submission on your Portfolio</Heading>
            <Hr className='my-4' />
            <Text className='mb-2'>Here are the details:</Text>
            <Text className='mb-2'>Name: {name}</Text>
            <Text className='mb-2'>Email: {email}</Text>
            <Text className='mb-2'>Message: {message}</Text>
            </Section>

            {/* Add your form data here */}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ContactFormEmail