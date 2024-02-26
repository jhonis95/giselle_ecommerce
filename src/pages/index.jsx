import * as React from "react"
import Navbar from "../templates/navbar"
import Home from "../components/home"
import Main from "../components/main"
import Footer from "../templates/footer"

const IndexPage = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Giselle Ecommerce</title>
