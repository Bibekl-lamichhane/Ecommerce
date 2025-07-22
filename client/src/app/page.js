import React from 'react'
import { CiWallet } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";
const page = () => {
  return (
    <div>
      <div className='flex justify-center items-center mx-8'><CiWallet /><h1 className='text-blue-600 text-2xl font-bold'>Balance=100</h1></div>
      <div className='flex justify-center items-center mx-8'><SlBadge /><h1 className='text-blue-600 text-2xl font-bold'>Rewardpoints=50</h1></div>
    </div>
  )
}

export default page