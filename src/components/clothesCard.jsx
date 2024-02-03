import * as React from "react"
import { useState } from "react"

const CardImages=({img})=>{
    const [images,setImages]=useState({
        imgLink1:`http://localhost:1337${img[0].attributes.url}`,
        imgLink2:`http://localhost:1337${img[1].attributes.url}`
    })
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
                <img
                    className=" object-cover"
                    onMouseOver={handleOver}
                    src={images.imgLink1} alt="clothe-image" 
                />:
                <img
                    className=" object-cover"
                    onMouseLeave={handleLeave}
                    src={images.imgLink2} alt="clothe-image" 
                />
            }
        </>
    )
}

const ClothesCard=({data})=>{
    return(
        <div className=" flex flex-wrap gap-11 justify-center">
            {
                data.data.map((item)=>{
                    return(
                        <div className=" bg-pink-500 rounded max-h-[452px] max-w-[357px]">
                            <CardImages
                                img={item.attributes.image.data}
                            />
                            <h4>{item.attributes.name}</h4>
                            <h6>{item.attributes.price}</h6>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ClothesCard