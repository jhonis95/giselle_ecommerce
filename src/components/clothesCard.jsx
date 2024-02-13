import * as React from "react"
import { useState } from "react"

const CardImages=({img,brand})=>{
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
                <div className=" relative">
                    <img
                        className=" object-cover w-full h-[347px]"
                        onMouseOver={handleOver}
                        src={images.imgLink1} alt="clothe" 
                    />
                    <div className=" absolute right-4 bottom-4 bg-pink-300 w-[72px] h-[53px] flex justify-center items-center">
                        <p className=" z-10 font-bold text-base font-urbanist ">{brand}</p>
                    </div>
                </div>:
                <div className=" relative">
                    <img
                        className=" object-cover w-full h-[347px]"
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
const ClothesCard=({data})=>{
    return(
        <div className=" flex flex-wrap gap-11 justify-center max-w-[1172px]">
            {
                data.attributes.products.data.map((item)=>{
                    return(
                        <div className=" bg-pink-500 rounded h-[452px] w-[357px]">
                            <CardImages
                                img={item.attributes.image.data}
                                brand={item.attributes.ref_store.data.attributes.Name}
                            />
                            <div className="flex flex-col m-2">
                                <h4 className="font-bold text-1xl font-urbanist text-pink-200">{item.attributes.name}</h4>
                                <h6 className="font-bold text-base font-urbanist text-pink-200">G {item.attributes.price}</h6>
                            </div>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default ClothesCard