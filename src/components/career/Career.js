import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';


const Career = () => {
  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_scm1niq', 'template_cki59xi', form.current, 'oCeKN9WxucYpBF8qf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset()
  };
  const inputs = [
    {
        
      name: "name",
      type: "text",
      label: "Full Name",
      placeholder: "John Doe",
      required: true,
    },
    {
       
      name: "phoneNumber",
      type: "number",
      label: "Phone Number",
      placeholder: "0790XXXXXX or 011XXXXXX",
      required: true,
    },
    {
     
      name: "DateofBirth",
      type: "date",
      label: "Date of Birth",
      required: true,
    },
    {
     
      name: "idno",
      type: "number",
      label: "ID",
      required: true,
    },
    {
     
      name: "position",
      type: "text",
      label: "Job Position",
      required: true,
    },
    {
        
      name: "uploadCv",
      type: "file",
      label: "Upload Cv",
      placeholder: "Upload your CV",
      required: true,
    },
  ]
  return (
    <div className='container m-auto py-16'>
      <h2 className="text-5xl text-left sm:text-center font-semibold text-[#6495ED] capitalize ">Apply Now</h2>
      <hr className='w-90'/>
      <section className="max-w-4xl p-6 mx-auto   mt-20">     
        <form encType='multipart/form-data' ref={form} onSubmit={sendEmail}>
          <h2 className="text-5xl text-center font-semibold text-[#23314C] capitalize">Tell Us About Your Qualifications</h2>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          {inputs.map((input, index)=>(
            <div>
              <label className="text-[#23314C] " >{input.label}</label>
              <input key={index} id={input.name} {...input}   className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
          ))}
              
          </div>

          <div className="flex justify-center mt-6">
              <button type='submit' className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#6495ED] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-[#6495ED]">Submit</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Career