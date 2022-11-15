import * as React from "react"
import { render } from "react-dom";

//importing stylesheets
import '../fonts/stylesheet.css';
import '../css/index.css';

//importing images
import pic from  '../images/default_avatar.png'
import ryanPortrait from '../images/ryan_portrait.jpg'
import tuckerPortrait from '../images/tucker_portrait.jpeg'
import cathrynPortrait from '../images/cathrynlyonss.jpeg'

const pageheader =
{
  fontFamily: "UbuntuMono",
}

const Abigail =
{
  name:"Abigail Bright",
  major:"Electrical Engineering: Computer Track",
  portrait: pic,
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
  webPage: 'tucker'
}

const groupMembers = [Abigail,Tucker,Cathryn,Ryan]

function MemberList(members)
{
  return(
    <div>
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
    <main style = {pageheader}>
    <h1> Meet Control Alt Elite!</h1>
    {displayMembers}
    </main>
  )
}
export default IndexPage

export const Head = () => <title>Home Page</title>
