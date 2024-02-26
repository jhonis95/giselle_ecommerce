import * as React from "react"
import { useState , useEffect} from "react"
import { v4 as uuidv4 } from 'uuid';
import CardImages from './cardImages'
import { useStaticQuery, graphql } from "gatsby"

const ClothesCard=({categorie})=>{
    const categorieData= useStaticQuery(graphql`
        query categoriesItens {
          allStrapiCategorie {
            nodes {
              products {
                name
                price
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
        }
      `
    )
    const [clothes,setClothes]=useState(categorieData.allStrapiCategorie.nodes[0])
    const handleText=(text)=>{
        const finalSentence=text.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
        return finalSentence
    }
    useEffect(()=>{
                switch(categorie) {
                    case 'Bra':
                        setClothes(categorieData.allStrapiCategorie.nodes[0])
                        break;
                    case 'Maternity':
                        setClothes(categorieData.allStrapiCategorie.nodes[1])
                        break;
                    case 'Panties':
                        setClothes(categorieData.allStrapiCategorie.nodes[2])
                        break;
                    case 'Pijamas':
                        setClothes(categorieData.allStrapiCategorie.nodes[3])
                        break;
                    case 'Sport':
                        setClothes(categorieData.allStrapiCategorie.nodes[4])
                        break;
                    case 'Shorts':
                        setClothes(categorieData.allStrapiCategorie.nodes[5])
                        break;
                    case 'Casual':
                        setClothes(categorieData.allStrapiCategorie.nodes[6])
                        break;
                    default:
                        break;
                }
    },[categorie])
    
    return(
        <div className=" flex flex-wrap gap-11 justify-center max-w-[1172px]">
            {
                clothes.products.map((item)=>{
                    return(
                        <div className=" bg-pink-500 rounded h-[452px] w-[357px] drop-shadow-lg" key={uuidv4()}>
                            <CardImages
                                key={uuidv4()}
                                img1={item.image[0].localFile.childImageSharp.gatsbyImageData}
                                img2={item.image[1].localFile.childImageSharp.gatsbyImageData}
                                brand={item.ref_store.Name}
                            />
                            <div className="flex flex-col gap-4 m-2">
                                <h4 className="font-bold text-1xl font-urbanist text-pink-200 h-[48px]">{handleText(item.name)}</h4>
                                <h6 className="font-bold text-base font-urbanist text-pink-200">G {item.price}</h6>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ClothesCard