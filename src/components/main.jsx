import * as React from "react"
import Categories from "./categories";
import ClothesCard from "./clothesCard";
import { useStaticQuery, graphql } from "gatsby"
import { useState } from "react";
import { useEffect } from "react";

const Main=()=>{
    const data= useStaticQuery(graphql`
        query MyQuery {
            dataJson {
              genders {
                female
                male
              }
            }
          }
    `
    )
    const [clothes,setClothes]=useState({})
    const [loading, setLoading] = useState(true); 
    useEffect(()=>{
        const fetchData= async()=>{
            try{
                const response= await fetch('http://localhost:1337/api/products?populate=*')
                const data = await response.json()
                setClothes(data)
                setLoading(false)
            }
            catch{
                console.log('err')
            }
        }
        fetchData()
    },[])
    return(
        <main>
            <section className=" w-full">
                <div className=" flex gap-[230px]">
                    <button>
                        {data.dataJson.genders.female}
                    </button>
                    <button>
                        {data.dataJson.genders.male}
                    </button>
                </div>
                <Categories/>
                <section>
                    <>
                        {
                            loading===true?
                            '':<ClothesCard data={clothes}/>
                        }
                    </>
                </section>
            </section>
        </main>
    )
}

export default Main; 