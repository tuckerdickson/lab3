import * as React from "react"
import { render } from "react-dom";

//importing stylesheets
import '../fonts/stylesheet.css';
import '../css/index.css';

//importing images
import pic from  '../images/default_avatar.png'
import ryanPortrait from '../images/ryan_portrait.jpg'
import tuckerPortrait from '../images/tucker_portrait.jpeg'
import  cathrynPortrait from '../images/cathrynlyonss.jpeg'

const pageheader =
{
  fontFamily: "UbuntuMono",
}

const Abigail =
{
  name:"Abigail Bright",
  major:"Electrical Engineering: Computer Track",
  portrait: pic
}

const Tucker =
{
  name: "Tucker Dickson",
  major:"Computer Science and Engineering",
  portrait: tuckerPortrait
}

const Cathryn =
{
  name: "Cathryn Lyons",
  major:"Computer Science and Engineering",
  portrait: cathrynPortrait
}

const Ryan =
{
  name: "Ryan Edwall",
  major: "Electrical Engineering: Computer Track",
  portrait: ryanPortrait
}

const groupMembers = [Abigail,Tucker,Cathryn,Ryan]

const imageStyle =
{
  borderRadius: "50%",
  width: "50%",
  height: "50%"
}

function MemberList(members)
{
  return(
    <div>
      {
        members.groupMembers.map(memberInfo =>
          <th>
            <img src = {memberInfo.portrait} style = {imageStyle} alt = {memberInfo.name}></img>
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
