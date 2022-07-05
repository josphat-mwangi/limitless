import React from 'react'
import Vm from '../vm/Vm'

const About = () => {
  return (
    <div>
        <div className=" py-16">
            <div className="md:flex md:justify-center md:space-x-8 md:px-14 ">
            
                <div className="mt-16 py-4 px-4  w-80 bg-white rounded-xl shadow-lg hover:shadow-xl  hover:scale-110 transition duration-500 mx-auto md:mx-0">
                    <div className="w-sm">
                    
                        <div className="mt-4 text-[#23314C]  text-center">
                            <h1 className="text-xl font-bold">Our Core Business</h1>
                            <img className="w-64" src="" alt="" />
                            <p className="mt-4 text-[#23314C] ">
                            <i class="fa-solid fa-3x fa-user-check"></i>
                            </p>
                            <a  href='#corebusiness' className='text-[#6495ED]'> Learn More <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                
                <div className="mt-16 py-4 px-4  w-80 bg-white rounded-xl shadow-lg hover:shadow-xl  hover:scale-110 transition duration-500 mx-auto md:mx-0">
                    <div className="w-sm">
                    
                        <div className="mt-4 text-[#23314C]  text-center">
                            <h1 className="text-xl font-bold">Mission & Vision</h1>
                        
                            <p className="mt-4 text-[#23314C] ">
                            <i class="fa-solid fa-3x fa-circle-check"></i>
                            </p>
                            <a  href='#vm' className='text-[#6495ED]'> Learn More <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="mt-16 py-4 px-4  w-80 bg-white rounded-xl shadow-lg hover:shadow-xl  hover:scale-110 transition duration-500 mx-auto md:mx-0">
                    <div className="w-sm">
                    
                        <div className="mt-4 text-[#23314C] text-center">
                            <h1 className="text-xl font-bold">Our Location</h1>
                            
                            
                            <p className="mt-4 text-[#23314C]  text-xl">
                                <i class="fa-solid fa-2x fa-phone "></i>
                            </p>
                            <a  href='#location' className='text-[#6495ED]'> Learn More <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            
            </div>
            <div className=" py-14">
                <div className="md:flex md:justify-center md:space-x-8 md:px-14" id='corebusiness'>
                
                    <div className="mt-16 py-4 px-4  w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div className="w-sm" >
                        
                            <div className="mt-4 text-[#23314C]  text-center">
                                <h1 className="text-xl font-bold">Our Core Business</h1>
                                <div className='py-4'>
                                    <i class="fa-solid fa-3x fa-user-check"></i>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="mt-16 text-center text-lg">
                            Limitless Security is committed to provding quality and customized services  that <br/>  comply   with customer requirements and an aim of enhancing customer satisfaction.
                            <br/> 
                            We endeavour to maintain and continously improve the effectiveness of the <br/>  quality management system that meet the customer's expectation
                        </p>
                    </div>
                </div>
            </div>
           
            <Vm />
            <div class="mx-5 mt-10 grid place-content-center text-[#23314C]" id='location'>
                <div class="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl  p-8 text-center h-72 max-w-sm mx-auto">
                    <h1 className="text-4xl sm:text-5xl   font-extrabold tracking-tight">Get in touch</h1>
                    <p class="text-lg">You can contact us whenever you need help or just curious about something.</p>
                </div>
                <div class="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
                    <h2 class="font-semibold text-2xl mb-6">  Bloom Hill(Ciana) Off Banana-Raini Road,
                                    P.O BOX 14853-00400</h2>
                
                    <p class="capitalize text-xl mt-1">0700214099 or 0790175477</p>
                    <p class="text-l mt-1"> Securilimitlessltd2021@gmail.com</p>
                </div>
            </div>
        </div> 
    

    </div>
  )
}

export default About