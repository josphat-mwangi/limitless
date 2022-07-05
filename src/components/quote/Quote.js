import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Quote = () => {
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
    
        emailjs.sendForm('service_lzrv49i', 'template_j3n88j2', form.current, 'S0kotXOrDd6uK03Ku')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
    };
  return (
    <div>
        <div className=" py-14">
            <div className="container mx-auto px-4 ">
                <div className='h-full' >
                    <h1 className="mt-8  text-5xl text-[#4a02ba] font-bold text-center">Request a Quote.</h1>
                </div>
            </div>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md  mt-20">
                
                <p className="text-sm text-center">Please fill out the form below to request a quote.</p>
                
                <form ref={form} onSubmit={sendEmail} >
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        {inputs.map((input)=>(
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" for="username">{input.label}</label>
                                <input key={input.id} id={input.name} {...input} name={input.name}  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                            </div>
                        ))}
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="message">Message</label>
                        <textarea name='message' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required>

                        </textarea>
                            
                    </div>

                    <div className="flex justify-center mt-6">
                        <button type='submit' className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    </div>
  )
}

export default Quote