import { useRef } from 'react'
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
    <div>
        <div className=" h-40" style={{backgroundImage: 'url(assets/build.jpg)', backgroundPosition: "center"  }}
>
            <h2 className='text-center text-white text-3xl font-extrabold py-12'>Contact Us</h2>
        </div>

        <div className='container mx-auto place-items-center'>
            <div className='text-center pt-8'>
                <h3 className='font-bold text-md uppercase'>Drop Us a Line</h3>
                <h3 className='text-3xl text-[#6495ED]  font-extrabold'>Send Your Message</h3>
            </div>
            <div class="flex flex-col">
                <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </div>

                        <div class="ml-4">
                            <h2 class="font-semibold ">Our Location</h2>
                            <p class="mt-2 text-base text-gray-500">Bloom Hill(Cianda) Off Banana-Raini</p>
                            <p class="mt-2 text-base text-gray-500">P.O BOX 14853-00400</p>
                        </div>
                    </div>

                    
                    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg ">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>

                        <div class="ml-4">
                            <h2 class="font-semibold">Phone Number</h2>
                            <p class="mt-2 text-base text-gray-500">0700214099</p>
                            <p class="mt-2 text-base text-gray-500">0790175477</p>
                        </div>
                    </div>
                    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </div>

                        <div class="ml-4">
                            <h2 class="font-semibold ">Email Address</h2>
                            <p class="mt-2 text-base text-gray-500">info@limitlesssecurity.co.ke</p>
                        </div>
                    </div>
                    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>

                        <div class="ml-4">
                            <h2 class="font-semibold ">Work Hours</h2>
                            <p class="mt-2 text-base text-gray-500">24-7</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        
        <div className='container m-auto px-8 space-y-8 md:px-12 lg:px-56 mb-32'>
            <div className="mx-auto grid gap-8 md:w-3/4 lg:w-full lg:grid-cols-2">
                
                <div className=' mb-24 py-18 '>
                
                        <div className='flex justify-center py-16'>
                            
                            <div className="place-self-center">
                                <form  ref={form} onSubmit={sendEmail}>
                                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                        {inputs.map((input, index)=>(
                                            <div key={index}>
                                                <label className="text-[#23314C]">{input.label}</label>
                                                <input key={input.id} id={input.name} {...input} name={input.name}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md focus:border-blue-500  focus:outline-none focus:ring"/>
                                            </div>
                                        ))}
                                        
                                    </div>
                                    <div>
                                        <label className="text-[#23314C] " >Message</label>
                                        <textarea name='message' className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500  focus:outline-none focus:ring" required>

                                        </textarea>
                                            
                                    </div>

                                    <div className="flex justify-center mt-6">
                                        <button type='submit' className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#6495ED] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-[#6495ED]">Send Message</button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                </div>
                
                
                <div className="max-w-md overflow-hidden rounded-xl  duration-200 hover:scale-105 pt-8 mb-16">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.975862482721!2d36.75812151528688!3d-1.1774508991411525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f231628269f27%3A0xb2dea2a94df33d50!2sBanana%20Hill%20Art%20Gallery!5e0!3m2!1sen!2ske!4v1663922647850!5m2!1sen!2ske" width="500" height="500" className='border-0' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Bloom Hill(Ciana) Off Banana-Raini'></iframe>
                </div>
                   
            </div>
           

            
        </div>
        
        
    </div>
    
   
    
  )
}

export default Contact