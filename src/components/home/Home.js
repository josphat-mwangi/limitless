import React from 'react'
import { HomeServiceItems, Companies } from './HomeItems'
import CountUp from '../counter/Counter' 




const Home = () => {
  return (
    <div>
        
        <div className="bg-[#6495ED] text-[#23314C] p-6">
            <div className="bg-white flex flex-col font-sans">
                <div className="container mx-auto px-8">
                    <main className="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
                        <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
                            <h1 className="uppercase text-6xl  font-bold leading-none tracking-wide mb-2">Limitless Security</h1>
                            <h2 className="uppercase text-4xl text-[#6495ED] text-secondary tracking-widest mb-6">Services Limited</h2>
                            <p className="leading-relaxed mb-12">Minding Your Business</p>
                        
                        </div>
                        <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
                            
                        </div>
                    </main>
                </div>
            </div>
        </div>
        <div className="py-16  text-[#23314C]">  
            <div className="container m-auto px-6  md:px-12 xl:px-0">
                <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
                    {HomeServiceItems.map((item, index) =>{
                        return(
                            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8" key={index}>
                                <div className="mb-12 space-y-4">
                                    <h3 className="text-2xl font-semibold ">{item.title}</h3>
                                    <p className="mb-6">{item.explanation1}</p>
                                    <p className="mb-6">{item.explanation2}</p>
                                    <a href={item.url} className="block font-medium text-[#6495ED]">Know more</a>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div> 
        <div classNameName="pb-8 bg-white">
            <CountUp />
        </div>
        <div className="py-8 text-[#23314C]">  
            <div className="container m-auto px-6  md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className='container mx-auto'>
                        <h2 className="text-2xl text-center  text-[#6495ED] font-bold md:text-4xl">Industries Served</h2>
                        <p className="mt-6 text-lg text-center">Our  expertise enables your business to stay relevant, increase productivity and satisfy your customers. No matter the business, Limitless Security Services has you covered with industry compliant solutions, customized to your company’s specific needs.</p>
                        
                    </div>
                </div>
            </div>
        </div>        
        <div className="py-8  text-[#23314C]">
            <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
                <div className="mx-auto text-center lg:w-7/12">
                    <h2 className="text-2xl text-[#6495ED]  font-bold md:text-4xl">Your favorite companies are our partners.</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
                    {Companies.map((item, index)=>{
                        return(
                            <div className="p-4" key={index}>
                                <img src={item.img}  className="transform hover:scale-110 transition duration-500" alt=""/>
                            </div>
                        )
                    })}
                   
                    
                </div>
            </div>
        </div>
       
        
      
    
       
        
    
       
    </div>
  )
}

export default Home