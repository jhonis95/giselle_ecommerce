import * as React from "react"
import Categories from "./categories";
import CardsContainer from "./cardsContainer";
import { useStaticQuery, graphql } from "gatsby"
import { useState } from "react";

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
    const [categorie, setCategorie]=useState('Dress')
    return(
        <main>
            <section className=" w-full mt-12">
                <div className=" flex gap-[230px] ml-40">
                    <button className=" font-urbanist font-bold text-4xl text-pink-500">
                        {data.dataJson.genders.female}
                    </button>
                    <button className=" font-urbanist font-bold text-4xl text-pink-500">
                        {data.dataJson.genders.male}
                    </button>
                </div>
                <div className=" flex justify-end mr-40">
                    <button className="font-urbanist font-bold text-lg text-pink-500">
                        see all
                    </button>
                </div>
                <Categories
                    setCategorie={setCategorie}
                />
                <CardsContainer
                    categorie={categorie}
                />
            </section>
        </main>
    )
}

export default Main; 