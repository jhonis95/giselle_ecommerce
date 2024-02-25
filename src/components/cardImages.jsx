import * as React from "react"
import { useState, useEffect } from "react"

const CardImages=({img,brand})=>{
    const [images,setImages]=useState({})
    useEffect(()=>{
        setImages({
            imgLink1:`http://localhost:1337${img[0].attributes.url}`,
            imgLink2:`http://localhost:1337${img[1].attributes.url}`
        })
    },[img])
    const [showMainImg,setShowMainImg]=useState(true)
    const handleOver=()=>{
        setShowMainImg(false)
    }
    const handleLeave=()=>{
        setShowMainImg(true)
    }
    return(
        <>
            {
                showMainImg===true?
                <div className=" relative">
                    <img
                        className=" object-fill w-full h-[347px]"
                        onMouseOver={handleOver}
                        src={images.imgLink1} alt="clothe" 
                    />
                    <div className=" absolute right-4 bottom-4 bg-pink-300 w-[72px] h-[53px] flex justify-center items-center">
                        <p className=" z-10 font-bold text-base font-urbanist ">{brand}</p>
                    </div>
                </div>:
                <div className=" relative">
                    <img
                        className=" object-fill w-full h-[347px]"
                        onMouseLeave={handleLeave}
                        src={images.imgLink2} alt="clothe1" 
                    />
                    <div className=" absolute right-4 bottom-4 bg-pink-300 w-[72px] h-[53px] flex justify-center items-center">
                        <p className=" z-10 font-bold text-base font-urbanist ">{brand}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default CardImages