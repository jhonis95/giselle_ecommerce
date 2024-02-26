import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import ClothesCard from "./clothesCard"

const CardsContainer=({categorie})=>{
    return(
        <section className=" flex justify-center gap-8">
            <> 
                <ClothesCard categorie={categorie}/>
                <StaticImage
                    src="../images/ad.png"
                    alt="ad"
                />
            </>
        </section>
    )
}
export default CardsContainer