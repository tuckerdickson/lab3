import * as React from "react"

//importing images
import kona1 from '../images/cathryn_images/KonaInCoat.jpeg'
import kona2 from '../images/cathryn_images/KonaOnCouch.jpeg'
import kona3 from '../images/cathryn_images/KonaOutside.jpeg'
import kona4 from '../images/cathryn_images/KonaWithToy.jpeg'
import tucker_portrait from '../images/tucker_portrait.jpeg'

const TuckerPage = () => {
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
        <h1>Tucker Dickson
        <span class="blink">_</span>
        </h1>
      </div>

      <div class = "content-tucker">
        <div class = "about-tucker">
          <div class = "about-tucker-text">
            <h1>About Me</h1>
            <p>Hi, I'm Tucker. I'm a senior, majoring in Computer Science and Engineering at the University of Iowa.</p>
          </div>
        </div>

        <div class = "skills-tucker">
          <h1>Skills</h1>
        </div>
    
        <div class = "experience-tucker">
          <h1>Professional Experience</h1>
        </div>

        <div class = "contact-tucker">
          <h1>Contact Me!</h1>
        </div>

      </div>
    </main>
  )
}
export default TuckerPage

export const Head = () => <title>Tucker's Page</title>
