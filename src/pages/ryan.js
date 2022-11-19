import * as React from "react"
import '../fonts/stylesheet.css';

const pageheader =
{
  fontFamily: "UbuntuMono",
}

const RyanPage = () => {
  return (
    <main style = {pageheader}>
    <h1> This is Ryan's Page!</h1>
    </main>
  )
}
export default RyanPage

export const Head = () => <title>Ryan's Page</title>
