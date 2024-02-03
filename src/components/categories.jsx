import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const CategoriesCard=({title,icon})=>{
    return(
        <div>
            <img src={icon} alt="" />
            <h5>{title}</h5>
        </div>
    )
}

const Categories=()=>{
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
            <div>
                <button>
                    see all
                </button>
            </div>
            <div className=" flex gap-[96px] justify-center">
                {
                    categoriesData.dataJson.categories.map((categorie)=>{
                        return(
                            <CategoriesCard
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