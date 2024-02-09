import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const CategoriesCard=({title,icon,setCategorie})=>{
    const handleclick=()=>{
        setCategorie(title)
    }
    return(
        <button onClick={handleclick} className=" rounded-xl bg-pink-500 w-[184px] h-[176px] flex flex-col gap-6 justify-center items-center hover:scale-105">
            <img src={icon} alt="categories-icons" />
            <h5 className=" font-urbanist font-bold text-2xl text-pink-200">{title}</h5>
        </button>
    )
}

const Categories=({setCategorie})=>{
    const categoriesData= useStaticQuery(graphql`
        query categories {
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
                {
                    categoriesData.dataJson.categories.map((categorie)=>{
                        return(
                            <CategoriesCard
                                setCategorie={setCategorie}
                                title={categorie.name}
                                icon={categorie.icon}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Categories