import React from 'react'

function FunctionClick() {
    function clickHandler(){
        alert("Button clicked success")

    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick