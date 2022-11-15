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
  imgPath: pic
}

const Tucker =
{
  name: "Tucker Dickson",
  major:"Computer Science and Engineering",
  imgPath: pic
}

const Cathryn =
{
  name: "Cathryn Lyons",
  major:"Computer Science and Engineering",
  imgPath: pic
}

const Ryan =
{
  name: "Ryan Edwall",
  major: "Electrical Engineering: Computer Track",
  imgPath: pic
}

const groupMembers = [Abigail,Tucker,Cathryn,Ryan]


function MemberList(members)
{
  return(
    <div>
      {
        members.groupMembers.map(memberInfo =>
          <th>
            <img src = {memberInfo.imgPath} width = "50%" height= "50%"></img>
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
    <h1 style = {pageheader}> Meet Control Alt Elite!</h1>
    {displayMembers}
    </main>
  )
}
export default IndexPage

export const Head = () => <title>Home Page</title>
