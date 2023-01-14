import { HomeServiceItems } from '../utilities/dataStore'
import Slider from '../components/slider'
import Partner from '../components/Partner'




const Home = () => {
  return (
    <div>
        <Slider/> 
        <div className="py-16  text-[#23314C]">  
            <div className="container m-auto px-6  md:px-12 xl:px-0">
                <h2 className="text-center text-4xl text-[#6495ED] font-bold leading-none tracking-wide mb-4">Our Expertise</h2>
                <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
                    {HomeServiceItems.map((item, index) =>{
                        return(
                            <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8" key={index}>
                                <div className="mb-12 space-y-4">
                                    <h3 className="text-2xl font-semibold ">{item.title}</h3>
                                    <p className="mb-6">{item.explanation1}</p>
                                    <p className="mb-6">{item.explanation2}</p>
                                    <a href={item.url} className="block font-medium text-[#6495ED]">Know more</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div> 
        <div className="py-2 mb-10">
            <div className="container mx-auto ">
                <div className="mx-auto text-center lg:w-7/12">
                    <h2 className="text-2xl text-[#6495ED]  font-bold md:text-4xl">
                        TRUSTED PARTNERS
                    </h2>
                </div>
            </div>
            <Partner />
        </div>
    </div>
  )
}

export default Home;