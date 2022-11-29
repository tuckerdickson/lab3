import * as React from "react"
import ryanPortrait from '../images/ryan_portrait.jpg'
import { Script } from "gatsby"

const RyanPage = () => {
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


      <div id = "background">
      <p></p>
      <div id="indexheader">
      <h1>About Ryan</h1>
      </div>

      <center>
      <p>Hello, I'm Ryan! I'm a senior, majoring in Electrical and Computer Engineering at the University of Iowa.</p>
      <img src = {ryanPortrait} height = "25%" width = "25%"  alt = {ryanPortrait} class = "portraitImage"></img>
      </center>

      <h1>Interests/Hobbies</h1>
      <p>&#x2022; I like to recreationally play tennis/volleyball</p>
      <p>&#x2022; Recently, I've been working on my baking skills</p>
      <p>&#x2022; I also enjoy singing/sketching in my free time</p>
      {/* <div id="pics"> */}
      {/* <img src = {volleyball} height = "35%" width = "35%" alt = {volleyball}></img>
      <img src = {ferrari} height = "29%" width = "29%" alt = {ferrari}></img>
      <img src = {calligraphy} height = "36%" width = "36%" alt = {calligraphy}></img> */}
      {/* </div> */}

      <h1>Fun Fact</h1>
      <p>&#x2022; My go to karoke song is <a href="https://youtu.be/idFJkZQmN38">Picture</a> by Kidrock ft. Sheryl Crow</p>
      </div>

      <div class = "contact-tucker">
        <center>
          <h1>Connect With Me!</h1>

          <div class = "icons">

            <a href = "https://www.instagram.com/ryan_edwall/?next=%2F" target = "_blank" rel="noreferrer">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>

            <a href = "https://www.linkedin.com/in/ryan-edwall-453a86199/" target = "_blank" rel="noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>

            <a href = "https://github.com/ryan-edwall" target = "_blank" rel="noreferrer">
              <ion-icon name="logo-github"></ion-icon>
            </a>

            <a href = "mailto:ryan-edwall@uiowa.edu?">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </div>
          </center>
        </div>

      <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    </main>
  )
}
export default RyanPage

export const Head = () => <title>Ryan's Page</title>
