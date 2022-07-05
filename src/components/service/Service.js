import React from 'react'
import { ServiceItems } from './ServiceItems'

const Service = () => {
  return (
    <div className="py-16">  

      <div className="container m-auto px-6 text-[#23314C] md:px-12 xl:px-6">

        <h1 className="mb-12 text-center text-2xl text-[#6495ED] font-bold md:text-4xl">Our Services</h1>

        <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          
          {ServiceItems.map((item, index)=>{
            return(
              <div className="p-6 border border-gray-100 rounded-xl bg-[#FFFF] sm:flex sm:space-x-8 sm:p-8" key={index}>   
              { item.img.length>0 ? 
                  <img className=" mx-auto"  src={item.img} alt="user avatar" height="300" width="300" loading="lazy"/> : ''
              }        
                
                <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                    <h1 className="text-[#6495ED]  text-center md:text-2xl font-bold">{item.title}</h1>
                    <p className="text-[#23314C]">{item.explanation1}</p>
                    <p className="text-[#23314C]">{item.explanation2}</p>
                    <div>
                      { item.features.length > 0 ? 
                        <div>
                          <h6 className="text-lg font-semibold text-left leading-none">features:</h6>
                          <ul className="text-md text-[#23314C] text-left list-disc list-inside">
                            {item.features.map((ft, index)=>{
                              return(
                                <li key={index}>
                                  {ft}
                                </li>
                              )
                            })}
                          </ul>
                        </div> : <div></div>
                         

                      }

                      
                    </div>
                </div>
              </div>
            )
          })}
         
        </div>
      </div>
    </div>
  )
}

export default Service