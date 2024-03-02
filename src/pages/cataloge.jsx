import * as React from "react"
import Navbar from "../templates/navbar"
import { useStaticQuery, graphql } from "gatsby"

const Cataloge=()=>{
    const categoriesData= useStaticQuery(graphql`
        query categories {
            dataJson {
                categories {
                    name
                }
            }
          }
    `
    )
    return(
        <main>
            <Navbar/>
            <aside className=" flex flex-col w-[485px]">
                <section>
                    <h2>roupas feminia</h2>
                </section>
                <section>
                    <h2>Category</h2>
                    <div>
                        {
                            categoriesData.dataJson.categories.map((categorie)=>{
                                return(
                                    <h4>{categorie.name}</h4>
                                )
                            })
                        }
                    </div>
                </section>
                <section>
                    <h2>Size</h2>
                    <div>
                        
                    </div>
                </section>
                <section>
                    <h2>Color</h2>
                    <div>

                    </div>
                </section>
            </aside>
        </main>
    )
}

export default Cataloge