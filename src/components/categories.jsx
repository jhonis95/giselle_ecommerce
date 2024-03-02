import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { v4 as uuidv4 } from 'uuid';
import { StaticImage } from "gatsby-plugin-image";
// import { StaticImage } from "gatsby-plugin-image";
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CategoriesCard=({title,setCategorie,children})=>{
    const handleclick=()=>{
        setCategorie(title)
    }
    return(
        <button onClick={handleclick} className=" rounded-xl bg-pink-500 w-[184px] h-[176px] flex flex-col gap-6 justify-center items-center hover:scale-105 drop-shadow-lg">
            {children}
            <h5 className=" font-urbanist font-bold text-2xl text-pink-200">{title}</h5>
        </button>
    )
}

const Categories=({setCategorie})=>{
    const categoriesJsonData= useStaticQuery(graphql`
        query categoriesJsonData {
            dataJson {
                categories {
                    name
                    icon
                }
            }
          }
    `
    )
    return(
        <section className=" flex flex-col gap-6">
            <div className=" flex gap-[96px] justify-center my-9">
                <CategoriesCard
                    setCategorie={setCategorie}
                    title={categoriesJsonData.dataJson.categories[0].name}
                    key={uuidv4()}
                >
                    <StaticImage
                        src="../images/categories_icons/casual.svg"
                        objectFit="fill"
                        height={94}
                    />
                </CategoriesCard>
                <CategoriesCard
                    setCategorie={setCategorie}
                    title={categoriesJsonData.dataJson.categories[1].name}
                    key={uuidv4()}
                >
                    <StaticImage
                        src="../images/categories_icons/sport-wear.svg"
                        objectFit="fill"
                        height={94}
                    />
                </CategoriesCard>
                <CategoriesCard
                    setCategorie={setCategorie}
                    title={categoriesJsonData.dataJson.categories[2].name}
                    key={uuidv4()}
                >
                    <StaticImage
                        src="../images/categories_icons/pijama.svg"
                        objectFit="fill"
                        height={94}
                    />
                </CategoriesCard>
                <CategoriesCard
                    setCategorie={setCategorie}
                    title={categoriesJsonData.dataJson.categories[3].name}
                    key={uuidv4()}
                >
                    <StaticImage
                        src="../images/categories_icons/underwear.svg"
                        objectFit="fill"
                        height={94}
                    />
                </CategoriesCard>
                <CategoriesCard
                    setCategorie={setCategorie}
                    title={categoriesJsonData.dataJson.categories[4].name}
                    key={uuidv4()}
                >
                    <StaticImage
                        src="../images/categories_icons/bra.svg"
                        objectFit="fill"
                        height={94}
                    />
                </CategoriesCard>
            </div>
        </section>
    )
}

export default Categories