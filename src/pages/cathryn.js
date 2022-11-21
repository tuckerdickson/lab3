import * as React from "react"

//importing images
import kona1 from '../cathryn_images/KonaInCoat.jpeg'
import kona2 from '../cathryn_images/KonaOnCouch.jpeg'
import kona3 from '../cathryn_images/KonaOutside.jpeg'
import kona4 from '../cathryn_images/KonaWithToy.jpeg'
import cathrynPortrait from '../images/cathrynlyonss.jpeg'

const CathrynPage = () => {
  return (
    <main>
    <a href="/">Back to Home Page</a>  
    <h1> Cathryn</h1>
    <p>Hi, I'm Cathryn. I'm a senior, majoring in Computer Science and Engineering at the University of Iowa.</p>
    <img src = {cathrynPortrait} height = "25%" width = "25%" alt = {cathrynPortrait}></img>

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

    
      
    
    
    </main>
  )
}
export default CathrynPage

export const Head = () => <title>Cathryn's Page</title>
