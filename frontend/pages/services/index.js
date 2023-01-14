import { ServiceItems } from "../../utilities/dataStore"


const Service = () => {
  return (
    <div className="py-16 mb-32">  

      <div className="container m-auto px-6 text-[#23314C] md:px-12 xl:px-6">

        <h2 className="mb-12 text-center text-2xl text-[#6495ED] font-bold md:text-4xl">Our Services</h2>

        <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
          
          {ServiceItems.map((item, index)=>{
            return(

              <div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8" key={index}>
                <div class="mb-12 space-y-4">
                    <h3 class="text-2xl font-semibold text-purple-900">{item.title}</h3>
                    <p class="mb-6">{item.explanation1}</p>
                    { item.explanation2 !="" &&  
                    <p class="mb-6">
                      {item.explanation2} <span className="font-medium text-purple-600">{item.features}</span>
                    </p> }
                    {/* <a href="#" class="block font-medium text-purple-600">Know more</a> */}
                </div>
                <img src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg" class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
              </div>
              
            )
          })}
         
        </div>
      </div>
    </div>
  )
}

export default Service