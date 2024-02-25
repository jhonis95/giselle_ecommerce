import { useState, useEffect } from "react"
import * as React from "react"
import { v4 as uuidv4 } from 'uuid';
import CardImages from './cardImages'

const NewClothes=()=>{
    const [allClothes,setAllClothes]=useState({})
    const [loading, setLoading] = useState(true);
    const getData=async()=>{
        const response= await fetch('http://localhost:1337/api/products?populate=*')
        const data = await response.json()
        return data.data.reverse().slice(0,6)
    }
    const handleText=(text)=>{
        const finalSentence=text.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
        return finalSentence
    }
    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const data=await getData()
                setAllClothes(data)
                setLoading(false)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])
    return(
        <section className="flex flex-wrap gap-11 justify-center max-w-[1172px]">
            {
                loading===false?
                allClothes.map((clothe)=>{
                    return(
                        <div className=" bg-pink-500 rounded h-[452px] w-[357px] drop-shadow-lg" key={uuidv4()}>
                            <CardImages
                                key={uuidv4()}
                                img={clothe.attributes.image.data}
                                brand={clothe.attributes.ref_store.data.attributes.Name}
                            />
                            <div className="flex flex-col gap-4 m-2">
                                <h4 className="font-bold text-1xl font-urbanist text-pink-200 h-[48px]">{handleText(clothe.attributes.name)}</h4>
                                <h6 className="font-bold text-base font-urbanist text-pink-200">G {clothe.attributes.price}</h6>
                            </div>
                        </div>
                    )
                }):""
            }
        </section>
    )
}

export default NewClothes