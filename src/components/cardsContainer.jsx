import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
// import ClothesCard from "./clothesCard"
const ClothesCard= React.lazy(()=>import('./clothesCard'))

const CardsContainer=({categorie})=>{
    return(
        <section className=" flex justify-center gap-8">
            <> 
                <React.Suspense fallback={<h3>loadding</h3>}>
                    <ClothesCard categorie={categorie}/>
                </React.Suspense>
                <StaticImage
                    src="../images/ad.png"
                    alt="ad"
                />
            </>
        </section>
    )
}
export default CardsContainer