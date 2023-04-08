import React from 'react'

export const Heading = () => {
  return (
    <div className="flex flex-row justify-between my-5" >
      <h3 className="font-bold text-3x1 font-serif">
      Human 
      <span className="block font-normal text-sm text-indigo-600">/?fj*nk</span>
      </h3>
      <button className="bg-indigo-300 rounded-full h-16 w-16">Play</button>
    </div>
  )
}

export default Heading;

