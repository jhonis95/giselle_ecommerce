import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const Navbar=()=>{
    return(
        <nav className=" flex flex-row justify-evenly h-[49px] w-full items-center fixed z-50">
            <section className="w-[400px]">
                <div>
                    <h2 className=" drop-shadow-lg">Giselle</h2>
                </div>
            </section>
            <section>
                <form action="get" className=" border rounded-full bg-white w-[397px] flex justify-between items-center px-2 drop-shadow-lg">
                    <input type="search" name="" id="" className=" h-[34px] w-full focus:outline-none"/>
                    <StaticImage
                        src="../images/magnifying-glass-solid.svg"
                        className=" w-4 h-4"
                    />
                </form>
            </section>
            <section className="flex justify-between w-[400px]">
                <ul className=" flex w-full justify-evenly items-center">
                    <a className="drop-shadow-lg" href="">Home</a>
                    <a className="drop-shadow-lg" href="">Catalogo</a>
                    <a className="drop-shadow-lg" href="">Contato</a>
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