import * as React from "react"
import Navbar from "../templates/navbar"
import Home from "../components/home"

const IndexPage = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <main></main>
      <footer></footer>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Giselle Ecommerce</title>
