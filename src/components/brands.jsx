import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { v4 as uuidv4 } from 'uuid';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Brands=()=>{
    const brandData= useStaticQuery(graphql`
        query brandData {
            dataJson {
              brand {
                name
                image {
                  childImageSharp {
                    gatsbyImageData(formats: WEBP)
                  }
                }
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
                        <GatsbyImage
                            key={uuidv4()} 
                            style={{
                                mixBlendMode:"color-burn",
                                aspectRatio: 1/1,
                                width:"10%"
                            }} 
                            objectFit="contain"
                            image={getImage(item.image.childImageSharp.gatsbyImageData)} 
                            alt={`image-${item.name}`}
                        />
                    )
                })
            }
        </section>
    )
}

export default Brands