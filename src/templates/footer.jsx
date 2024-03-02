import { Link } from "gatsby"
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { v4 as uuidv4 } from 'uuid';
import { StaticImage } from "gatsby-plugin-image";

const Footer=()=>{
    const categoriesData= useStaticQuery(graphql`
        query categoriesFooter {
            dataJson {
                categories {
                    name
                }
            }
          }
    `
    )
    return(
        <footer className="w-full bg-pink-500 flex flex-col items-center py-5 font-urbanist text-sm">
            <section className="flex justify-evenly items-center w-[1172px]">
                <div className="flex gap-5 items-center">
                    <StaticImage
                        src="../images/categories_icons/logo.svg" 
                        className="w-[50px]"
                        alt="logo" 
                    />
                    <h2 className=" drop-shadow-lg font-['urbanist'] text-4xl font-bold text-pink-300">Giselle</h2>
                </div>
                <div className=" flex flex-col items-start">
                    <h4 className="font-urbanist font-bold text-xl">Nossas Roupas</h4>
                    <ul className=" flex flex-col gap-2">
                        {
                            categoriesData.dataJson.categories.map((categorie)=>{
                                return(
                                    <Link to="" key={uuidv4()}>{categorie.name}</Link>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        <h4 className="font-urbanist font-bold text-xl">Address</h4>
                        <h6 className="w-[262px]">Eusebio Ayala 1224 c/Yataity Cora, Asunción, Paraguay</h6>
                    </div>
                    <div>
                        <h4 className="font-urbanist font-bold text-xl">Company</h4>
                        <h6>Services</h6>
                        <h6>Work with use</h6>
                    </div>
                </div>
                <div className=" flex flex-col gap-5 items-center">
                    <div className="flex gap-3 z-10">
                        <button className=" bg-red-600 w-[39px] h-[39px] rounded-full flex justify-center items-center">
                            <StaticImage
                                src="../images/sm-1.svg"
                                alt="social-media" 
                            />
                        </button>
                        <button className=" bg-red-600 w-[39px] h-[39px] rounded-full flex justify-center items-center">
                            <StaticImage
                                src="../images/sm-2.svg"
                                alt="social-media" 
                            />
                        </button>
                        <button className=" bg-red-600 w-[39px] h-[39px] rounded-full flex justify-center items-center">
                            <StaticImage
                                src="../images/sm-3.svg"
                                alt="social-media" 
                            />
                        </button>
                    </div>
                    <div className=" flex gap-2">
                        <input className=" p-2" type="text" />
                        <button>sent us a messenge</button>
                    </div>
                </div>
            </section>
            <h6 className=" mt-10 font-urbanist font-bold text-base">©2024 Giselle all rights reserved</h6>
        </footer>
    )
}

export default Footer