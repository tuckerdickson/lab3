import * as React from "react"
import '../fonts/stylesheet.css';

const pageheader =
{
  fontFamily: "UbuntuMono",
}

const TuckerPage = () => {
  return (
    <main style = {pageheader}>
    <h1> This is Tucker's Page!</h1>
    </main>
  )
}
export default TuckerPage

export const Head = () => <title>Tucker's Page</title>
