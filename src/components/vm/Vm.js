import React from 'react'


const Vm = () => {
  return (
    <div className="container mx-auto mt-20 mb-20" id='vm'>
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-[#FFFF]">
        
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-[#6495ED] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1 text-center text-[#FFFF]">Vision</h3>
            <p className="leading-loose text-justify text-[#FFFF] text-lg">
              To ensure safe and secure urban and rural communities <br/> 
                <span className='text-center text-[#FFFF] text-lg'>
                    leading to a peaceful and stable society
                </span> 
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#6495ED] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#6495ED] shadow"></div>
          </div>
          
        </div>
        
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#6495ED] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#6495ED] shadow"></div>
          </div>
          <div className="bg-[#6495ED] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
            <h3 className="font-bold text-lg mb-1 text-center text-[#FFFF]"> Mission</h3>
            <p className="leading-loose text-justify text-[#FFFF] text-lg">
              To relentlessly pursue and provide the highest <br/> quality of proffesional and trained security services
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse md:contents">
          <div className="bg-[#6495ED] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
            <h3 className="font-semibold text-lg mb-1 text-center text-[#FFFF]">Core Value</h3>
            <p className="leading-loose text-center text-[#FFFF] text-lg">
               Integrity <br/> 
            </p>
            <p className="leading-loose text-justify text-[#FFFF] text-lg">
               Innovation - We are committed to research & development. <br/> 
               continously invest in new products technology & intelligent system
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-[#6495ED] pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#6495ED] shadow"></div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Vm
