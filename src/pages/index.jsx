import * as React from "react"
import Navbar from "../templates/navbar"
import Home from "../components/home"
import Main from "../components/main"

const IndexPage = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Main/>
      <footer></footer>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Giselle Ecommerce</title>
