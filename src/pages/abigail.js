import * as React from "react"

//importing images
import volleyball from '../abigail_images/volleyball.jpg'
import calligraphy from '../abigail_images/calligraphy.jpg'
import ferrari from '../abigail_images/ferrari2.jpeg'
import abigailPortrait from '../images/abigail_portrait.jpeg'

const AbigailPage = () => {
  return (
    <main>
      <div class="navbar-wrapper">
          <div class="left">
              <div class="navbar-link-wrapper">
                  <a href="/">HOME</a>

              </div>
              
              <div class="navbar-link-wrapper">
                  <a href="/about">ABOUT</a>
              </div>
          </div>

          <div class="right">
              <div class="brand">
                  <div>CTRL ALT ELITE</div>
              </div>
          </div>
      </div>


      <div id="indexheader">
        <h1>About Abigail
        <span class="blink">_</span>
        </h1>
      </div>
    
    <p>Hi, I'm Abigail! I'm a senior majoring in Electrical and Computer Engineering at the University of Iowa.</p>
    <img src = {abigailPortrait} height = "25%" width = "25%"  alt = {abigailPortrait} class = "center"></img>

    <h1>Personal Interests</h1>
    <p>&#x2022; I play volleyball every chance I get</p>
    <p>&#x2022; I love Formula 1 (Forza Ferrari!)</p>
    <p>&#x2022; I practice calligraphy for fun in my free time</p>
    <div id="pics">
    <img src = {volleyball} height = "35%" width = "35%" alt = {volleyball}></img>
    <img src = {ferrari} height = "29%" width = "29%" alt = {ferrari}></img>
    <img src = {calligraphy} height = "36%" width = "36%" alt = {calligraphy}></img>
    </div>
   

    <h1>Fun Facts</h1>
    <p>&#x2022; My go-to karaoke song is <a href="https://youtu.be/Vy0mqXuBMY4">I Write Sins Not Tragedies</a> by Panic! At The Disco</p>
    <p>&#x2022; I once broke both of my wrists at the same time and had double hot pink casts</p>
    <p>&#x2022; My favorite animal is a stingray</p>
    <p>&#x2022; I come from a long line of Hawkeyes</p>
    
    </main>
  )
}
export default AbigailPage

export const Head = () => <title>Abigail's Page</title>
