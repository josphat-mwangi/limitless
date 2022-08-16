import React, {useState} from 'react'
import axios from 'axios'



const Career = () => {
  
 
  const [ name, setName]                  = useState('')
  const [ phoneNumber, setPhoneNumber]    = useState('')
  const [ dateofBirth, setDateofBirth ]   = useState('')
  const [ idno, setIdNo ]                 = useState('')
  const [ position, setPosition ]         = useState('')
  const [ files, setFiles ]               = useState()
  const [ isSubmited, setIsSubmited ]     = useState(false)
  console.log(files)

  const changeHandler = (e) =>{
    setFiles(e.target.files[0]);
   
  }
  

  let sendEmail = async (e) => {
    e.preventDefault();
    let url = '/mail'
    try{
      await axios({
        method: "POST",
        url: url,
        data: { files, name, position, dateofBirth, idno, phoneNumber},
        headers: {"Content-Type": "multipart/form-data"}
      })
    }catch(err){
      console.log(err)
    }
  
    setDateofBirth('')
    setFiles('')
    setIdNo('')
    setName('')
    setPhoneNumber('')
    setPosition('')
    setIsSubmited(true)
    
  };
 

  return (
    <div className='container m-auto py-16 '>
      <h2 className="text-5xl text-left sm:text-center font-semibold text-[#6495ED] capitalize ">Apply Now</h2>
      <hr className='w-90'/>
      <section className="max-w-4xl p-6 mx-auto   mt-20">  
      { isSubmited ? (
        <div class=" rounded-md p-3 flex justify-center ">
        <svg
            class="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <circle cx="12" cy="12" r="9" />
            <path d="M9 12l2 2 4-4" />
        </svg>
  
        <div class="text-green-700">
          <div class="font-bold text-xl">Application is Submit successfully</div>
    
           
        </div>
      </div>
      ):(
        <form  encType="multipart/form-data" action='/mail' onSubmit={sendEmail}   >
         <h2 className="text-5xl text-center font-semibold text-[#23314C] capitalize">Tell Us About Your Qualifications</h2>
         <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
         
           
             <div>
               
               <label className="text-[#23314C] " >Full Name</label>
               <input name= "name" type="text" placeholder= "John Doe" required  value={ name } onChange={(e)=> setName(e.target.value)}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"/>
             </div>
             <div>
               <label className="text-[#23314C] " >Phone Number</label>
               <input name= "phoneNumber" type="number" placeholder= "07xxxxxxx" required  value={ phoneNumber }   onChange={(e)=> setPhoneNumber(e.target.value)}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"/>
             </div>
             <div>
               <label className="text-[#23314C] " >Date Of Birth</label>
               <input  name= "dateofBirth" type="date" placeholder= "mm/dd/yyyy" required  value={ dateofBirth } onChange={(e)=> setDateofBirth(e.target.value)}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"/>
             </div>
             <div>
               <label className="text-[#23314C] " >ID Number</label>
               <input  name= "idno" type="number" placeholder= "ID number" required  value={ idno } onChange={(e)=> setIdNo(e.target.value)}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"/>
             </div>
             <div>
               <label className="text-[#23314C] " >Position</label>
               <input name= "position" type="text" placeholder= "position" required   value={ position } onChange={(e)=> setPosition(e.target.value)}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"/>
             </div>
             <div>
               <label className="text-[#23314C] " >Resume/CV</label>
               <input name= "files" type="file" placeholder= "" required    onChange={changeHandler}  className="block w-full px-4 py-2 mt-2 text-[#23314C] bg-white border border-gray-300 rounded-md   focus:border-blue-500 focus:outline-none focus:ring"/>
             </div>
           
         
             
         </div>

         <div className="flex justify-center mt-6">
             <button type='submit'  className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#6495ED] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-[#6495ED]">Submit</button>
         </div>
        </form>
        
      )}   
       
      </section>
    </div>
  )
}

export default Career