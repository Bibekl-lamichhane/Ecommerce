'use client'
import { Button, Input, Textarea } from '@heroui/react'
import React, { useState } from 'react'

const page = () => {
   const [fileName, setFileName] = useState('No file chosen')

  return (
    <div>
      <form>
        <h1 className='text-blue-500 text-2xl font-bold m-4'>Add Notice</h1>
         <Input label="Notice Heading" placeholder="Enter your Subject of Notice" className='m-2 w-auto md:w-200' variant='faded'  />
          <Textarea
      isClearable
      className="w-full md:w-200 m-2"
      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      label="Description"
      placeholder="Description"
      variant="bordered"
    />
     <div className="flex items-center gap-4">
      {/* Custom Button */}
      <label className=" m-2 border border-black bg-amber-500 text-white px-4 py-2 rounded cursor-pointer">
        Choose File
        <input
          type="file"
          className="hidden"
          onChange={(e) =>
            setFileName(e.target.files[0]?.name || 'No file chosen')
          }
        />
      </label>

      {/* File name text, OUTSIDE the button */}
      <span>{fileName}</span>
    </div>
    <div className='flex justify-center items-center my-8' ><Button type='submit' color="primary">Add Notice</Button></div>
    
    </form>
    </div>
  )
}

export default page