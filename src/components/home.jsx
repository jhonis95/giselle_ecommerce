import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import FeaturesCard from "./featuresCard";

const Home=()=>{
    return(
        <header className=" h-screen bg-pink-500 -z-40 relative">
            <StaticImage
                style={{
                    position:"absolute",
                    top:"50px",
                    left:"33.333333%",
                }}
                src="../images/Vector.svg"
                alt="bg-vector"
            />
            <StaticImage
                style={{
                    position:"absolute",
                    bottom:"20px",
                    left:"33.333333%"
                }}
                src="../images/Vector-1.svg"
                alt="bg-vector"
            />
            <StaticImage
                style={{
                    position:"absolute",
                    left:"0px",
                    bottom: "0px"
                }}
                src="../images/Vector-2.svg"
                alt="bg-vector"
            />
            <StaticImage
                style={{
                    position:"absolute",
                    right:"0px",
                    bottom: "1rem"
                }}
                src="../images/Vector-3.svg"
                alt="bg-vector"
            />
            <StaticImage
                style={{
                    position:"absolute",
                    right:"0px",
                    bottom: "0rem"
                }}
                src="../images/Fashion-bg.png"
                alt="bg-vector"
            />
            <section className="flex h-5/6 items-center">
                <div className=" ml-48 z-10">
                    <h2 className=" font-[urbanis] text-6xl font-bold max-w-[1200px] text-purple-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Giselle</h2>
                    <h4 className=" font-[urbanis] text-6xl font-bold max-w-[1200px] text-purple-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Melhor loja de roupas feminina</h4>
                    <h4 className=" font-[urbanis] text-6xl font-bold max-w-[1200px] text-purple-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Roupas pensadas para valorizar você por inteira.</h4>
                </div>
            </section>
            <section className="w-full flex justify-between items-center px-14 h-1/6">
                <div className=" flex flex-col gap-5">
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
                    <div className="flex gap-16 z-10">
                        <h6 className="font-['urbanist'] text-lg font-bold text-red-600">Tel: 021-442-410</h6>
                        <h6 className="font-['urbanist'] text-lg font-bold text-red-600">Email: ventas@gisellesrl.com</h6>
                    </div>
                </div>
                <div className="flex gap-x-7">
                    <FeaturesCard
                        title='Pago contra-entrega'
                        content='Pagas cuando recibis'
                    >
                        <StaticImage
                            src="../images/comments-dollar.svg"
                            height={52}
                            objectFit="fill"
                            alt="icons-comments-dollar"
                        />
                    </FeaturesCard>
                    <FeaturesCard
                        title='Envios a todo el pais'
                        content='delivery y envios a todo el pais'
                    >
                        <StaticImage
                            src="../images/truck-fast.svg"
                            height={52}
                            objectFit="fill"
                            alt="icons-truck-fast"
                        />
                    </FeaturesCard>
                    <FeaturesCard
                        title='Cambia en la tienda'
                        content='hasta 7 dias para cambiar con la factura'
                    >
                        <StaticImage
                            src="../images/right-left.svg"                      
                            height={52}
                            objectFit="fill"
                            alt="icons-right-left"
                        />
                    </FeaturesCard>
                </div>
            </section>
        </header>
    )
}
export default Home;