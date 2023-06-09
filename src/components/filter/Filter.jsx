import React from 'react'


/* ### filter syntax:(it creates new array)
filter(callBackFunction(Element, Index, Array){}, thisArg)
*/


function Filter() {
    let filarr=[1,2,3,4,5,6,7,8,9,10];
  return (
    <>
    <div>{filarr.filter((element,index,array)=>{
        return(
            element>5
        )
    })}</div>
    </>
  )
}

export default Filter