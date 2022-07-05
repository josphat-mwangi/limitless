import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            label: "Full Name",
            placeholder: "John Doe",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            label: "Email Address",
            placeholder: "johndoe@gmail.com",
            required: true,
        },
        {
            id: 3,
            name: "phoneNumber",
            type: "number",
            label: "Phone Number",
            required: true,
        },
        {
            id: 4,
            name: "subject",
            type: "text",
            label: "Subject",
            required: true,
        },
    ]
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lzrv49i', 'template_pgcehp1', form.current, 'S0kotXOrDd6uK03Ku')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
    };
  return (
    <div className='overscroll-contain'>
        <div className=" py-14">
            <div className="container mx-auto px-4">
                <h1 className="mt-8  text-5xl text-[#6495ED] font-bold">Contact Us.</h1>
                <p className="mt-4 text-[#23314C]">
                    Interested in our services or need our advice? Then please get in touch and we’ll be glad to help.
                </p>
    
            </div>
            <div className="md:flex md:justify-center md:space-x-8 md:px-14">
            
            <div className="mt-16 py-4 px-4 bg-whit w-80 bg-white rounded-xl shadow-lg hover:shadow-xl  hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div className="w-sm">
                
                    <div className="mt-4 text-[#23314C] text-center">
                        <h1 className="text-xl font-bold">Write to Us</h1>
                        <p className="mt-4 text-[#23314C]">Securilimitlessltd2021@gmail.com</p>
                        <div className="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="mt-16 py-4 px-4 bg-whit w-80 bg-white rounded-xl shadow-lg hover:shadow-xl  hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div className="w-sm">
                
                    <div className="mt-4 text-[#23314C] text-center">
                        <h1 className="text-xl font-bold">Call Us</h1>
                        <p className="mt-4 text-[#23314C]">Our Contacts</p>
                        <div className="flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <p className="mt-4 text-[#23314C]">
                            <a href='/about#location' className='text-[#6495ED]'> Call our Offices</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-16 py-4 px-4 bg-whit w-80 bg-white rounded-xl shadow-lg hover:shadow-xl  hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <div className="w-sm">
                    <img className="w-64" src="" alt="" />
                    <div className="mt-4 text-[#23314C] text-center">
                        <h1 className="text-xl font-bold">Visit Us</h1>
                        <p className="mt-4 text-[#23314C]">Our Location</p>
                        <div className="flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <p className="mt-4 text-[#23314C]">
                            <a href='/about#location' className='text-[#6495ED]'>See All Location</a>
                            
                        </p>
        
                    </div>
                </div>
            </div>
            
            
            </div>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-20">
                <h2 className="text-2xl text-center font-semibold text-[#6495ED] capitalize ">Fill an inquiry Form</h2>
                
                <form  ref={form} onSubmit={sendEmail}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        {inputs.map((input)=>(
                            <div>
                                <label className="text-[#23314C]" for="username">{input.label}</label>
                                <input key={input.id} id={input.name} {...input} name={input.name}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md focus:border-blue-500  focus:outline-none focus:ring"/>
                            </div>
                        ))}
                       
                    </div>
                    <div>
                        <label className="text-[#23314C] " for="message">Message</label>
                        <textarea name='message' className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500  focus:outline-none focus:ring" required>

                        </textarea>
                            
                    </div>

                    <div className="flex justify-center mt-6">
                        <button type='submit' className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#6495ED] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-[#6495ED]">Submit</button>
                    </div>
                </form>
            </section>
        </div>
 
    
    </div>

    
  
  )
}

export default Contact