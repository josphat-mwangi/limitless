import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { sliderData } from '../utilities/dataStore';
import styles from '../styles/slider.module.scss';
import Counter from "./counter/Counter.js";



const Slider = () =>{
    const [ currentSlide, setCurrentSlide ] = useState(0);
    const slideLength = sliderData.length
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? slideLength-1: currentSlide -1)
    }

    const nextSlide = () =>{
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
    }

    useEffect(()=>{
        setCurrentSlide(0);
    }, [])

    const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(()=>{
        if(autoScroll) auto()
        return () => clearInterval(slideInterval);
    }, [currentSlide, autoScroll, slideInterval])


    return(
        <>
            <div className={styles.slider }>
                <BsChevronLeft className={`${styles["arrow"]} ${styles["prev"]}` } onClick={prevSlide} />
                <BsChevronRight className={`${styles["arrow"]} ${styles["next"]}`} onClick={nextSlide} />
                {sliderData.map((data, index) => (
                    <div key={index} className={index === currentSlide ? `${styles['slide']} ${styles['current']}` : `${styles['slide']}` }>
                        {index === currentSlide && (
                            <>
                                <img src={data.image} alt='slider' />
                            
                                <motion.div className={styles.hero__cta} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                                    <h1>{data.headline}</h1>
                                    <p>{data.paragraph}</p>
                                </motion.div>
                            </>
                        )}
                    </div>
                ))}
               
            </div>
            <div className="container mx-auto -mt-44">
                <div className="w-full  py-6 bg-gray-700  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 ">
                    <div className="mx-auto flex items-center justify-center">
                        <Counter title="Brands Protected" numbers="50" />
                        <Counter title="Secured Homes" numbers="100"  />
                        <Counter title="Number Of Employees" numbers="80" />
                        <Counter title="Smiles" numbers="1000" />
                    </div>
                   
                </div>
            </div>  
            
        </>
        
    )
}


export default Slider;