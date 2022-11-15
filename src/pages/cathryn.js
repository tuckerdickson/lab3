import * as React from "react"
import '../fonts/stylesheet.css';

const pageheader =
{
  fontFamily: "UbuntuMono",
}

const CathrynPage = () => {
  return (
    <main style = {pageheader}>
    <h1> This is Cathryn's Page!</h1>
    </main>
  )
}
export default CathrynPage

export const Head = () => <title>Cathryn's Page</title>