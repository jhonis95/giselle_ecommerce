import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { useState } from "react"

const CardImages=({img1,img2,brand})=>{

    const [showMainImg,setShowMainImg]=useState(true)
    const handleOver=()=>{
        console.log("over func")
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
                    <div 
                        onMouseOver={handleOver}
                        >
                        <GatsbyImage
                            image={getImage(img1)}
                            className=" w-full h-[347px]"
                            objectFit="fill"
                            layout="constrained"
                        />

                    </div>
                    <div className=" absolute right-4 bottom-4 bg-pink-300 w-[72px] h-[53px] flex justify-center items-center">
                        <p className=" z-10 font-bold text-base font-urbanist ">{brand}</p>
                    </div>
                </div>:
                <div className=" relative">
                    <div 
                        onMouseLeave={handleLeave}
                    >
                        <GatsbyImage
                            image={getImage(img2)}
                            className=" object-fill w-full h-[347px]"
                            objectFit="fill"
                            layout="constrained"
                        />
                    </div>
                    <div className=" absolute right-4 bottom-4 bg-pink-300 w-[72px] h-[53px] flex justify-center items-center">
                        <p className=" z-10 font-bold text-base font-urbanist ">{brand}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default CardImages