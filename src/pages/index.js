import * as React from "react"
import { render } from "react-dom";
import '../fonts/stylesheet.css';
import pic from  '../images/default_avatar.png'

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
  portrait: pic
}

const Cathryn =
{
  name: "Cathryn Lyons",
  major:"Computer Science and Engineering",
  portrait: pic
}

const Ryan =
{
  name: "Ryan Edwall",
  major: "Electrical Engineering: Computer Track",
  portrait: pic
}

const groupMembers = [Abigail,Tucker,Cathryn,Ryan]

function MemberList(members)
{
  return(
    <div>
      {
        members.groupMembers.map(memberInfo =>
          <th>
            <img src = {memberInfo.portrait} width = "50%" height= "50%" alt = {memberInfo.name}></img>
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
