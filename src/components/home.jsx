import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import FeaturesCard from "./featuresCard";

const Home=()=>{
    return(
        <header className=" h-screen">
            <section className="flex h-5/6 items-center">
                <div className=" ml-48">
                    <h2>Giselle</h2>
                    <h4>Melhor loja de roupas feminina</h4>
                    <h4>Roupas pensadas para valorizar você por inteira.</h4>
                </div>
                <div className=" -z-20 flex items-center">
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
                        className=" absolute right-0 bottom-4"
                        src="../images/Fashion-bg.png"
                    />
                </div>
            </section>
            <section className="w-full flex justify-between items-center px-14 h-1/6">
                <div>
                    <div className="flex">
                        <button className=" border bg-red-600 w-[39px] h-[39px] rounded-full flex justify-center items-center">

                        </button>
                        <button className=" border bg-red-600 w-[39px] h-[39px] rounded-full flex justify-center items-center">

                        </button>
                        <button className=" border bg-red-600 w-[39px] h-[39px] rounded-full flex justify-center items-center">

                        </button>
                    </div>
                    <div className="flex">
                        <h6>Tel: 021-442-410</h6>
                        <h6>Email: ventas@gisellesrl.com</h6>
                    </div>
                </div>
                <div className="flex gap-x-7">
                    <FeaturesCard
                        title='Pago contra-entrega'
                        content='Pagas cuando recibis'
                        image=''
                    />
                    <FeaturesCard
                        title='Envios a todo el pais'
                        content='delivery y envios a todo el pais'
                        image=''
                    />
                    <FeaturesCard
                        title='Cambia en la tienda'
                        content='hasta 7 dias para cambiar con la factura'
                        image=''
                    />
                </div>
            </section>
        </header>
    )
}
export default Home;