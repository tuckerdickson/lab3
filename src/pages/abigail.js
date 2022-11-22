import * as React from "react"

//importing images
import volleyball from '../abigail_images/volleyball.jpg'
import kona2 from '../cathryn_images/KonaOnCouch.jpeg'
import kona3 from '../cathryn_images/KonaOutside.jpeg'
import kona4 from '../cathryn_images/KonaWithToy.jpeg'
import abigailPortrait from '../images/abigail_portrait.jpeg'

const AbigailPage = () => {
  return (
    <main>
    <div id = "background">

    <a href="/">Back to Home Page</a>  
    <p></p>
    <div id="indexheader">
    <h1>About Abigail</h1>
    </div>
    
    <p>Hi, I'm Abigail! I'm a senior majoring in Electrical and Computer Engineering at the University of Iowa.</p>
    <img src = {abigailPortrait} height = "25%" width = "25%"  alt = {abigailPortrait} class = "center"></img>

    <h1>Something</h1>
    <p>Get rid of Kona </p>
    <p>Make myself seem cool:</p>
    <p>&#x2022; Calligraphy</p>
    <p>&#x2022; Volleyball</p>
    <p>&#x2022; Being cute</p>
    <img src = {volleyball} height = "25%" width = "25%" alt = {volleyball}></img>
    <img src = {kona2} height = "25%" width = "25%" alt = {kona2}></img>
    <img src = {kona3} height = "25%" width = "25%" alt = {kona3}></img>
    <img src = {kona4} height = "25%" width = "25%" alt = {kona4}></img>

    <h1>Fun Facts</h1>
    <p>&#x2022; I love Formula 1 (Forza Ferrari!)</p>
    <p>&#x2022; I come from a long line of Hawkeyes</p>
    <p>&#x2022; I broke both of my wrists at the same time and had double hot pink casts</p>
    <p>&#x2022; My favorite animal is a stingray</p>
    </div>
    </main>
  )
}
export default AbigailPage

export const Head = () => <title>Abigail's Page</title>
