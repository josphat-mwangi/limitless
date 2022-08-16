import React from 'react'

const About = () => {
  return (
    
    <section className="py-8 ">
        <div className="pb-10 ">
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
    
        <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 px-4">
                        <div className="relative flex flex-col mt-4">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-sitemap"></i>
                                </div>
                                <h6 className="text-xl mb-1 font-semibold">Vision</h6>
                                <p className="mb-4 text-blueGray-500">
                                    To ensure safe and secure urban and rural communities leading to a peaceful and stable society
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col min-w-0">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-drafting-compass"></i>
                                </div>
                                <h6 className="text-xl mb-1 font-semibold">
                                    Core Value
                                </h6>
                                <p className="mb-4 text-blueGray-500">
                                    Integrity
                                    Innovation - We are committed to research & development.
                                    continously invest in new products technology & intelligent system
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 mt-4">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-newspaper"></i>
                                </div>
                                <h6 className="text-xl mb-1 font-semibold">Mission</h6>
                                <p className="mb-4 text-blueGray-500">
                                    To relentlessly pursue and provide the highest quality of proffesional and trained security services
                                </p>
                            </div>
                        </div>
                        {/* <div className="relative flex flex-col min-w-0">
                            <div className="px-4 py-5 flex-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                    <i className="fas fa-file-alt"></i>
                                </div>
                                <h6 className="text-xl mb-1 font-semibold">Documentation</h6>
                                <p className="mb-4 text-blueGray-500">
                                    Built by developers for developers. You will love how easy
                                    is to to work with Notus JS.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    
       
           

    
  )
}

export default About