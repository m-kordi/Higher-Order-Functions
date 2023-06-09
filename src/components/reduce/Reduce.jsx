import React from 'react'


/* ### Reduce syntax:(single output value)
reduce(callBackFunction(Accumulator/start element /,current value/the next elemnt that will be add with acc/ ,current Index ,source Array){}, initialValue)
*/



function Reduce() {
  let reducearr=[10/* acc */,20/* current ...ets */,15,30];
  return (
    <div>{reducearr.reduce((acc, current/* ,index, arr */)=>{
      return acc + current
    })}</div>
  )
}

export default Reduce