import React from 'react'

function Testonly() {
  let igarr="Elzr123er4o"
  return (
    <>
    <div>{igarr}</div>
    <div>{igarr.split("").map(
      (el)=>{
        return(typeof(parseInt(el))==="string"?console.log(el):console.log("no"))
      }
    ).join("")}</div>
    </>
  )
}

export default Testonly