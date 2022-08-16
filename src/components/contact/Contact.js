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
    
    <div className="overscroll-contain mb-16">
        <div className='container m-auto px-6 space-y-8 md:px-12 lg:px-56'>
            <div className='grid grid-cols-1 mt-6 sm:grid-cols-2 gap-16'>
                <div className="place-self-center">
                    <h2 className="text-2xl text-center font-semibold text-[#6495ED] capitalize ">Fill an inquiry Form</h2>
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
                            <button type='submit' className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#6495ED] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-[#6495ED]">Submit</button>
                        </div>
                    </form>
                </div>
                <div className='text-md  place-self-start '>
                    <div className='py-5'>
                        <h1 className='text-2xl font-extrabold text-[#6495ED] '>Contact Information</h1>
                    </div>
                
                    
                    <div className='pb-4'>
                        <p>Bloom Hill(Ciana) Off Banana-Raini</p>
                        <p>Road, P.O BOX 14853-00400</p>
                    </div>
                    <div className='pb-4'>
                        <p>0700214099</p>
                        <p> 0790175477</p>
                    </div>
                    <p>securilimitlessltd2021@gmail.com</p>
                </div>
            </div>
        </div>
      
        
    </div>
    
  )
}

export default Contact