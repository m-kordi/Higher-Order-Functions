import React from 'react'


/* ### map syntax:(it creates new array)
map(callBackFunction(Element, Index, Array){}, thisArg)
*/


function Map() {
    let maparr=[1,2,3,4,5,6]
  return (
    <>
    <div>{maparr}</div>
    <div>{maparr.map((elment,index,array/* search for thisarg */)=>{
        return(
            <>
            <div>{elment+elment}</div>
            <div>the index of arry is{index}</div>
            <div>the arr all old val is {array}</div>
            </>
        )
    })}</div>
    </>
  )
}

export default Map