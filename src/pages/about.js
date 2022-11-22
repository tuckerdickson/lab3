import * as React from "react"

//importing stylesheets
import '../fonts/stylesheet.css';
import '../css/index.css';


//importing images
import ryanPortrait from '../images/ryan_portrait.jpg'
import tuckerPortrait from '../images/tucker_portrait.jpeg'
import cathrynPortrait from '../images/cathrynlyonss.jpeg'
import abigailPortrait from '../images/abigail_portrait.jpeg'


const Abigail =
{
  name:"Abigail Bright",
  major:"Electrical Engineering: Computer Track",
  portrait: abigailPortrait,
  webPage: 'tucker'

}

const Tucker =
{
  name: "Tucker Dickson",
  major:"Computer Science and Engineering",
  portrait: tuckerPortrait,
  webPage: 'tucker',
}

const Cathryn =
{
  name: "Cathryn Lyons",
  major:"Computer Science and Engineering",
  portrait: cathrynPortrait,
  webPage: 'cathryn'
}

const Ryan =
{
  name: "Ryan Edwall",
  major: "Electrical Engineering: Computer Track",
  portrait: ryanPortrait,
  webPage: 'ryan'
}

const groupMembers = [Abigail,Tucker,Cathryn,Ryan]

function MemberList(members)
{
  return(
    <div class = "members">
      {
        members.groupMembers.map(memberInfo =>
          <th>
            <a href={memberInfo.webPage}>
            <img src = {memberInfo.portrait} class ="portraitImage"alt = {memberInfo.name}></img>
            </a>
            <p>{memberInfo.name}</p>
            <p>{memberInfo.major}</p>
          </th>
          )
      }
    </div>
  )
}

const displayMembers = <MemberList groupMembers = {groupMembers}/>
const IndexPage = () => {
  return (
    <main>
      <div id="indexheader">
        <h1> About Us
        <span class="blink">_</span>
        </h1>
      </div>

      <div class = "pageinfo">
        {displayMembers}
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>About</title>
