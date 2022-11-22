import * as React from "react"

//importing images
import volleyball from '../abigail_images/volleyball.jpg'
import calligraphy from '../abigail_images/calligraphy.jpg'
import ferrari from '../abigail_images/ferrari.jpeg'
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

    <h1>Personal Interests</h1>
    <p>&#x2022; Volleyball</p>
    <p>&#x2022; Formula 1 (Forza Ferrari!)</p>
    <p>&#x2022; Calligraphy</p>
    <div id="pics">
    <img src = {volleyball} height = "37%" width = "37%" alt = {volleyball}></img>
    <img src = {ferrari} height = "25%" width = "25%" alt = {ferrari}></img>
    <img src = {calligraphy} height = "38%" width = "38%" alt = {calligraphy}></img>
    </div>
   

    <h1>Fun Facts</h1>
    <p>&#x2022; My go-to karaoke song is <a href="https://youtu.be/Vy0mqXuBMY4">I Write Sins Not Tragedies</a> by Panic! At The Disco</p>
    <p>&#x2022; I broke both of my wrists at the same time and had double hot pink casts</p>
    <p>&#x2022; My favorite animal is a stingray</p>
    </div>
    </main>
  )
}
export default AbigailPage

export const Head = () => <title>Abigail's Page</title>
