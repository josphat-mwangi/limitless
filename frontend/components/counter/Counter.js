import React from 'react'
import CountUp from 'react-countup';

const Counter = ({ title, numbers }) => {
  return (
   
    <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
      
        <div className="px-4  w-80  transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <div className="mt-2 text-[#fafdee] text-center">
              <h3 className="text-4xl font-bold"><CountUp end={numbers}/>
              <span className='text-5xl'>
                +
              </span>
              </h3>
              <p className="mt-2 text-2xl text-gray-600">{ title }</p>
            </div>
          </div>
        </div>
      
    </div>
    
  )
}

export default Counter;

 