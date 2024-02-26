import { useState, useEffect } from "react"
import * as React from "react"
import { v4 as uuidv4 } from 'uuid';
import CardImages from './cardImages'
import { useStaticQuery, graphql } from "gatsby"

const NewClothes=()=>{
    const newProducts= useStaticQuery(graphql`
        query newProducts {
            allStrapiProduct {
              nodes {
                price
                name
                ref_store {
                  Name
                }
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
        }
      `
    )
    
    const [newClothes,setNewClothes]=useState(newProducts.allStrapiProduct.nodes)

    useEffect(()=>{
        setNewClothes(newProducts.allStrapiProduct.nodes.reverse().slice(0,6))
    },[])
    const handleText=(text)=>{
        const finalSentence=text.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
        return finalSentence
    }

    return(
        <section className="flex flex-wrap gap-11 justify-center max-w-[1172px]">
            {
                newClothes.map((clothes)=>{
                    return(
                        <div className=" bg-pink-500 rounded h-[452px] w-[357px] drop-shadow-lg" key={uuidv4()}>
                            <CardImages
                                key={uuidv4()}
                                img1={clothes.image[0].localFile.childImageSharp.gatsbyImageData}
                                img2={clothes.image[1].localFile.childImageSharp.gatsbyImageData}
                                brand={clothes.ref_store.Name}
                            />
                            <div className="flex flex-col gap-4 m-2">
                                <h4 className="font-bold text-1xl font-urbanist text-pink-200 h-[48px]">{handleText(clothes.name)}</h4>
                                <h6 className="font-bold text-base font-urbanist text-pink-200">G {clothes.price}</h6>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default NewClothes