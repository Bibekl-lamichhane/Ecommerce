'use client'
import { Input } from '@heroui/react'
import React from 'react'

const page = () => {
  return (
    <div>
        <div><h1 className='text-blue-500 text-2xl font-bold '>Add Notice</h1></div>
         <Input label="Notice Heading" placeholder="Enter your Subject of Notice"  variant='faded' />
         
    </div>
  )
}

export default page