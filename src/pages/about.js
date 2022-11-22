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
  skills:"Skills: Abigail's skills go here",
  interests:"Interests: Abigail's interests go here",
  contact:"Email: Abigail's email goes here",
  portrait: abigailPortrait,
  webPage:"tucker"

}

const Tucker =
{
  name: "Name: Tucker Dickson",
  major:"Major: Computer Science and Engineering",
  skills:"Skills: sinistromanual",
  interests:"Interests: software design",
  contact:"Email: nathan-dickson@uiowa.edu",
  portrait: tuckerPortrait,
  webPage: 'tucker',
}

const Cathryn =
{
  name: "Cathryn Lyons",
  major:"Computer Science and Engineering",
  skills:"Skills: Cathryn's skills go here",
  interests:"Interests: Cathryn's interests go here",
  contact:"Email: Cathryn's email goes here",
  portrait: cathrynPortrait,
  webPage: 'cathryn'
}

const Ryan =
{
  name: "Ryan Edwall",
  major: "Electrical Engineering: Computer Track",
  skills:"Skills: Ryan's skills go here",
  interests:"Interests: Ryan's interests go here",
  contact:"Email: Ryan's email goes here",
  portrait: ryanPortrait,
  webPage: 'ryan'
}

const groupMembers = [Abigail,Tucker,Cathryn,Ryan]

function MemberList(members)
{
  return(
        <div class = "two-column-wrapper">
        {
            members.groupMembers.map(memberInfo =>
                <>
                    <div class = "about-photo">
                        <img src={memberInfo.portrait} class="aboutImage" alt={memberInfo.name}></img>
                    </div>

                    <div class = "about-paragraph">
                        <h1>{memberInfo.name}</h1>
                        <h3>{memberInfo.major}</h3>
                        <h3>{memberInfo.skills}</h3>
                        <h3>{memberInfo.interests}</h3>
                        <h3>{memberInfo.contact}</h3>
                    </div>
                </>
        )}
        </div>
    )}

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
