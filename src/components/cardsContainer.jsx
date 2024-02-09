import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { lazy } from "react"
import { Suspense } from "react"
import { useEffect } from "react"
import { useState } from "react"


const Fallback=()=>{
    return(
        <h1>loading</h1>
    )
}

const ClothesCard=lazy(()=>import("./clothesCard"))

const CardsContainer=({categorie})=>{
    const [clothes,setClothes]=useState({})
    const [loading, setLoading] = useState(true);
    const fetchTest=async()=>{

        const response= await fetch('http://localhost:1337/api/categories?populate[products][populate][0]=image.data[0]')
        const data = await response.json()
        return data
    }

    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const data= await fetchTest()
                console.log(categorie)
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
                    case 'Pajamas':
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
                    case 'Dress':
                        setClothes(data.data[5])
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
        <section className=" flex justify-center gap-8">
            <> 
                {
                    loading==false?
                    <Suspense fallback={Fallback}>
                        <ClothesCard data={clothes}/>
                    </Suspense>:""

                }
                <StaticImage
                    src="../images/ad.png"
                />
            </>
        </section>
    )
}
export default CardsContainer