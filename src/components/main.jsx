import * as React from "react"
import Categories from "./categories";
import CardsContainer from "./cardsContainer";
import { useStaticQuery, graphql } from "gatsby"
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Brands from "./brands";
import NewClothes from "./newClothes";

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
    const [categorie, setCategorie]=useState('Bra')
    return(
        <main>
            <section className=" w-full my-12">
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
                <section className=" flex gap-10 justify-center my-10">
                    <StaticImage
                        src="../images/ad2.webp"
                        alt=""
                    />
                    <StaticImage
                        src="../images/ad3.webp"
                        alt=""
                    />
                </section>
                <Brands/>
                <div className=" flex gap-[230px] ml-40 my-12">
                    <button className=" font-urbanist font-bold text-4xl text-pink-500">
                        New Clothes
                    </button>
                </div>
                <div className="flex w-full justify-center">
                    <NewClothes/>
                </div>
            </section>
        </main>
    )
}

export default Main; 