import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Link } from "gatsby"

const Navbar=()=>{

    return(
        <nav className=" bg-pink-500 flex flex-row justify-evenly h-[49px] w-full items-center fixed z-50">
            <section className="w-[400px]">
                <div className="flex gap-5 items-center">
                    <StaticImage
                        src="../images/categories_icons/logo.svg" 
                        className="w-[50px]"
                        alt="logo" 
                    />
                    <h2 className=" drop-shadow-lg font-['urbanist'] text-4xl font-bold text-pink-300">Giselle</h2>
                </div>
            </section>
            <section>
                <form action="get" className=" border rounded-full bg-white w-[397px] flex justify-around items-center px-2 drop-shadow-lg">
                    <input type="search" name="" id="" className=" h-[34px] w-3/4 focus:outline-none"/>
                    <StaticImage
                        src="../images/magnifying-glass-solid.svg"
                        className=" w-4 h-4"
                        alt="search-icon"
                    />
                </form>
            </section>
            <section className="flex justify-between w-[400px] gap-12">
                <ul className=" flex w-full justify-evenly items-center gap-8">
                    <Link className=" navbar-links" to="/">Home</Link>
                    <Link className=" navbar-links" to="/cataloge">Catalogo</Link>
                    <Link className=" navbar-links" to="/contato">Contato</Link>
                </ul>
                <div className="flex items-center gap-x-4">
                    <button className=" btn-circle">
                        <StaticImage
                            src="../images/bag-shopping-solid.svg"
                            alt="bag-icon"
                        />
                    </button>
                    <button className=" btn-circle">
                        <StaticImage
                            src="../images/user-regular.svg"
                            alt="user-icon"
                        />
                    </button>
                </div>
            </section>
        </nav>
    )
}

export default Navbar