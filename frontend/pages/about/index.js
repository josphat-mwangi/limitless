
// import about from '../img/about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStopwatch, faBriefcase, faBook, faCheck } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <>
        <section className="container m-auto px-6  md:px-12 xl:px-0 py-16 mb-16 ">
            <div className="pb-8 ">
                <div className="md:flex md:justify-center md:space-x-8 md:px-36" id='corebusiness'>
                    <div className="rounded-xl   hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div className="w-sm" >
                            <div className="mt-4 text-[#23314C]  text-center">
                                <img src=""  alt='' className='h-96' />
                            </div>
                        </div>
                    </div>
                
                    <div className='relative flex flex-col min-w-0'>
                        <div className='container mx-auto '>
                            <h1 className='font-extrabold text-[#6495ED] text-3xl py-2 md:pt-4'>Our Company</h1>
                            <div className='relative max-w-lg mx-auto md:max-w-3xl mt-6 min-w-0 break-word w-full mb-4'>
                                <p className="text-lg">
                                    Limitless Security is committed to provding quality and customized
                                    services  that   comply   with customer requirements and an aim of enhancing customer satisfaction.
                                </p>
                                <p className='text-lg'>
                                    We endeavour to maintain and continously improve the effectiveness of the  quality  management system that meet the customer's expectation.
                                </p>
                            </div>
                            
                            
                            
                        
                            <div className=" py-2 flex-auto">
                                <div className='flex px-4 gap-4 items-center'>
                                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                        <FontAwesomeIcon icon={faCheck} size="lg" />
                                    </div>
                                    <h6 className="text-xl text-[#6495ED]  font-semibold">
                                    Mission

                                    </h6>
                                </div>
                            
                                <div className='relative max-w-lg mx-auto md:max-w-3xl mt-1 min-w-0 break-word w-full mb-4'>
                                    <p className="mb-4 text-blueGray-500">
                                        To relentlessly pursue and provide the highest quality of proffesional and trained security services.
                                    </p>
                                </div>
                                
                            </div>
                            <div className=" py-2 flex-auto">
                                <div className='flex px-4 gap-6 items-center'>
                                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                        <FontAwesomeIcon icon={faCheck} size="lg" />
                                    </div>
                                    <h6 className="text-xl text-[#6495ED] font-semibold">
                                    Vision

                                    </h6>
                                </div>
                            
                                <div className='relative max-w-lg mx-auto md:max-w-3xl mt-1 min-w-0 break-word w-full mb-3'>
                                    <p className="mb-4 text-blueGray-500">
                                        To ensure safe and secure urban and rural communities leading to a peaceful and stable society
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className='bg-blue-100'>
            <section className="container m-auto px-6  md:px-12 xl:px-0 py-16 mb-16 ">
                <h2 className='text-3xl text-center text-[#6495ED] font-extrabold'>Our Values</h2>
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-6/12 px-4">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-6/12 px-4">
                                <div className="relative flex flex-col mt-4">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className='flex justify-center'>
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <FontAwesomeIcon icon={faBook} size="lg" />
                                            </div>
                                        </div>
                                        <h6 className="text-xl mb-1 font-semibold text-center">Discipline</h6>
                                        <p className="mb-4 text-blueGray-500 text-center">
                                            Discipline ensures individuals behave in an acceptable way at the workplace and also adhere to the rules and regulations of the organization.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="w-full md:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 mt-4">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className='flex justify-center'>
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <FontAwesomeIcon icon={faUser} size="lg" />
                                            </div>
                                        </div>
                                        <h6 className="text-xl mb-1 font-semibold text-center">Integrity</h6>
                                        <p className="mb-4 text-blueGray-500 text-center">
                                            Integrity is a character trait that encompasses honesty, loyalty, dependability and trustworthiness, and it is our commitment to uphold these principles no matter the situation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 px-4">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-6/12 px-4">
                                <div className="relative flex flex-col mt-4">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className='flex justify-center'>
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <FontAwesomeIcon icon={faStopwatch} size="lg" className='text-[#6495ED]' />
                                            </div>
                                        </div>
                                        <h6 className="text-xl mb-1 font-semibold text-center">Responsibility</h6>
                                        <p className="mb-4 text-blueGray-500 text-center">
                                            Responsibility is associated with Integrity and our commitment to doing the tasks they are assigned is unmatched. Our quality focused approach makes it happen.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="w-full md:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 mt-4">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className='flex justify-center'>
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <FontAwesomeIcon icon={faBriefcase} size="lg" />
                                            </div>
                                        </div>
                                        <h6 className="text-xl mb-1 font-semibold text-center">Excellence</h6>
                                        <p className="mb-4 text-blueGray-500 text-center">
                                            We are passionate about our work and our willingness to learn and improve constantly can create positive affect for our clients and our organisation.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
            
        
    </>
  )
}

export default About