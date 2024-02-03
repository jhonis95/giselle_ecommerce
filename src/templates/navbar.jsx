import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Link } from "gatsby"

const Navbar=()=>{

    return(
        <nav className=" bg-pink-500 flex flex-row justify-evenly h-[49px] w-full items-center fixed z-50">
            <section className="w-[400px]">
                <div>
                    <h2 className=" drop-shadow-lg font-['urbanist'] text-4xl font-bold text-pink-300">Giselle</h2>
                </div>
            </section>
            <section>
                <form action="get" className=" border rounded-full bg-white w-[397px] flex justify-around items-center px-2 drop-shadow-lg">
                    <input type="search" name="" id="" className=" h-[34px] w-3/4 focus:outline-none"/>
                    <StaticImage
                        src="../images/magnifying-glass-solid.svg"
                        className=" w-4 h-4"
                    />
                </form>
            </section>
            <section className="flex justify-between w-[400px] gap-12">
                <ul className=" flex w-full justify-evenly items-center gap-8">
                    <Link className=" text-2xl font-['urbanist'] font-extrabold text-red-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" to="/">Home</Link>
                    <Link className=" text-2xl font-['urbanist'] font-extrabold text-red-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" to="/catalogo">Catalogo</Link>
                    <Link className=" text-2xl font-['urbanist'] font-extrabold text-red-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" to="/contato">Contato</Link>
                </ul>
                <div className="flex items-center gap-x-4">
                    <button className=" border bg-orange-200 w-[39px] h-[39px] rounded-full flex justify-center items-center drop-shadow-lg">
                        <StaticImage
                            src="../images/bag-shopping-solid.svg"
                        />
                    </button>
                    <button className=" border bg-orange-200 w-[39px] h-[39px] rounded-full flex justify-center items-center drop-shadow-lg">
                        <StaticImage
                            src="../images/user-regular.svg"
                        />
                    </button>
                </div>
            </section>
        </nav>
    )
}

export default Navbar