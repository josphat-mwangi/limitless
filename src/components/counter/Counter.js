import React from 'react'
import CountUp from 'react-countup';

const Counter = () => {
  return (
   
    <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
      <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-4">
        <div className="mt-4 py-2 px-4  w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <div className="mt-4 text-green-600 text-center">
              <h1 className="text-3xl font-bold"><CountUp end={50}/>+</h1>
              <p className="mt-4 text-2xl text-gray-600">Brands Protected</p>
            </div>
          </div>
        </div>
        <div className="mt-4 py-2 px-4  w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <div className="mt-4 text-green-600 text-center">
              <h1 className="text-3xl font-bold"><CountUp end={100}/>K+</h1>
              <p className="mt-4 text-2xl text-gray-600">Secured Homes</p>
            </div>
          </div>
        </div>
        <div className="mt-4 py-2 px-4  w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <div className="mt-4 text-green-600 text-center">
              <h1 className="text-3xl font-bold"><CountUp end={80}/>+</h1>
              <p className="mt-4 text-2xl text-gray-600">Number Of Employees</p>
            </div>
          </div>
        </div>
        <div className="mt-4 py-2 px-4  w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
          <div className="w-sm">
            <div className="mt-4 text-green-600 text-center">
              <h1 className="text-3xl font-bold"><CountUp end={1000}/>+</h1>
              <p className="mt-4 text-2xl text-gray-600">Smiles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Counter

 