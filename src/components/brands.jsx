import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { v4 as uuidv4 } from 'uuid';

const Brands=()=>{
    const brandData= useStaticQuery(graphql`
        query brandData {
            dataJson {
              brand {
                icon
                name
              }
            }
          }
    `
    )
    return(
        <section className=" flex w-full justify-evenly">
            {
                brandData.dataJson.brand.map((item)=>{
                    return(
                        <img
                            key={uuidv4()}
                            className=" w-[10%] h-max aspect-square object-contain mix-blend-color-burn"
                            src={item.icon} 
                            alt={`icon-${item.name}`} 
                        />
                    )
                })
            }
        </section>
    )
}

export default Brands