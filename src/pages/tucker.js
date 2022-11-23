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
      <div id = "background">

        <a href="/">Back to Home Page</a>  
        <p></p>
        <div id="indexheader">
        <h1>About Tucker</h1>
      </div>
      
      <p>Hi, I'm Tucker. I'm a senior, majoring in Computer Science and Engineering at the University of Iowa.</p>
      <img src = {tucker_portrait} height = "25%" width = "25%" class = "center"></img>

      <h1>Pets</h1>
      <p>This is my puppy, Kona. She is an 8 month old, Australian Shepherd. </p>
      <p>Her talents include:</p>
      <p>&#x2022; Sitting</p>
      <p>&#x2022; Sometimes laying</p>
      <p>&#x2022; Being cute</p>
      <img src = {kona1} height = "25%" width = "25%" alt = {kona1}></img>
      <img src = {kona2} height = "25%" width = "25%" alt = {kona2}></img>
      <img src = {kona3} height = "25%" width = "25%" alt = {kona3}></img>
      <img src = {kona4} height = "25%" width = "25%" alt = {kona4}></img>

      <h1>Fun Fact</h1>
      <p>&#x2022; My go to karoke song is <a href="https://youtu.be/idFJkZQmN38">Picture</a> by Kidrock ft. Sheryl Crow</p>
      </div>
    </main>
  )
}
export default TuckerPage

export const Head = () => <title>Tucker's Page</title>
