import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import FeaturesCard from "./featuresCard";

const Home=()=>{
    return(
        <header className=" h-screen bg-pink-500 -z-40">
            <section className="flex h-5/6 items-center">
                <div className=" ml-48 z-10">
                    <h2 className=" font-[urbanis] text-6xl font-bold max-w-[1200px] text-purple-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Giselle</h2>
                    <h4 className=" font-[urbanis] text-6xl font-bold max-w-[1200px] text-purple-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Melhor loja de roupas feminina</h4>
                    <h4 className=" font-[urbanis] text-6xl font-bold max-w-[1200px] text-purple-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Roupas pensadas para valorizar você por inteira.</h4>
                </div>
                <div className=" flex items-center">
                    <StaticImage
                        className=" absolute top-20 left-1/3"
                        src="../images/Vector.svg"
                    />
                    <StaticImage
                        className=" absolute bottom-5 left-1/3"
                        src="../images/Vector-1.svg"
                    />
                    <StaticImage
                        className=" absolute left-0 bottom-0"
                        src="../images/Vector-2.svg"
                    />
                    <StaticImage
                        className=" absolute right-0 bottom-4"
                        src="../images/Vector-3.svg"
                    />
                    <StaticImage
                        className=" absolute right-0 bottom-0"
                        src="../images/Fashion-bg.png"
                    />
                </div>
            </section>
            <section className="w-full flex justify-between items-center px-14 h-1/6">
                <div className=" flex flex-col gap-5">
                    <div className="flex gap-3 z-10">
                        <button className=" bg-red-600 w-[39px] h-[39px] rounded-full flex justify-center items-center">
                            <img src="../static/1e4cbcc257dc41bd6a5552b4f1776bc7/sm-1.svg" alt="social-media" />
                        </button>
                        <button className=" bg-red-600 w-[39px] h-[39px] rounded-full flex justify-center items-center">
                            <img src="../static/a24c7d3efd84d1b7f60bc2726d2636d2/sm-2.svg" alt="social-media" />
                        </button>
                        <button className=" bg-red-600 w-[39px] h-[39px] rounded-full flex justify-center items-center">
                            <img src="../static/198de58d9c2914ff8acede3b00605731/sm-3.svg" alt="social-media" />
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
                        image='../static/ecbfa793fac89e97337facb3077bfb36/comments-dollar.svg'
                    />
                    <FeaturesCard
                        title='Envios a todo el pais'
                        content='delivery y envios a todo el pais'
                        image='../static/a8ed944acfc910b650d429c44e2a0441/truck-fast.svg'
                    />
                    <FeaturesCard
                        title='Cambia en la tienda'
                        content='hasta 7 dias para cambiar con la factura'
                        image='../static/b81eae137dd837d1f5add0070f26295a/right-left.svg'
                    />
                </div>
            </section>
        </header>
    )
}
export default Home;