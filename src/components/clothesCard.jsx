import * as React from "react"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import CardImages from './cardImages'

const ClothesCard=({categorie})=>{
    const [clothes,setClothes]=useState({})
    const [loading, setLoading] = useState(true);
    const fetchTest=async()=>{

        const response= await fetch('http://localhost:1337/api/categories?populate[products][populate][0]=image&populate[products][populate][1]=ref_store')
        const data = await response.json()
        return data
    }
    const handleText=(text)=>{
        const finalSentence=text.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
        return finalSentence
    }
    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const data= await fetchTest()
                switch(categorie) {
                    case 'Bra':
                        setClothes(data.data[0])
                        setLoading(false)
                        break;
                    case 'Maternity':
                        setClothes(data.data[1])
                        setLoading(false)
                        break;
                    case 'Panties':
                        setClothes(data.data[2])
                        setLoading(false)
                        break;
                    case 'Pijamas':
                        setClothes(data.data[3])
                        setLoading(false)
                        break;
                    case 'Sport':
                        setClothes(data.data[4])
                        setLoading(false)
                        break;
                    case 'Shorts':
                        setClothes(data.data[5])
                        setLoading(false)
                        break;
                    case 'Casual':
                        setClothes(data.data[6])
                        setLoading(false)
                        break;
                    default:
                        break;
                }
            }
            catch{
                console.log('err')
            }
        }
        fetchData()
    },[categorie])
    return(
        <div className=" flex flex-wrap gap-11 justify-center max-w-[1172px]">
            {
                loading===false?
                clothes.attributes.products.data.map((item)=>{
                    return(
                        <div className=" bg-pink-500 rounded h-[452px] w-[357px] drop-shadow-lg" key={uuidv4()}>
                            <CardImages
                                key={uuidv4()}
                                img={item.attributes.image.data}
                                brand={item.attributes.ref_store.data.attributes.Name}
                            />
                            <div className="flex flex-col gap-4 m-2">
                                <h4 className="font-bold text-1xl font-urbanist text-pink-200 h-[48px]">{handleText(item.attributes.name)}</h4>
                                <h6 className="font-bold text-base font-urbanist text-pink-200">G {item.attributes.price}</h6>
                            </div>
                        </div>
                    )
                })
                :""
            }
        </div>
    )
}

export default ClothesCard