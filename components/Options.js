import React from 'react'
import Option from './Option'
const Options = (props) => {
  return(
    <div>
    <p>options component here.</p>
    <button onClick = {props.handleDeleteAll}>
    REMOVE ALL
    </button>
    {
      props.options.map((option)=>(
        <Option 
        key= {option} 
        option = {option}
        handleDeleteProp = {props.handleDeleteProp}
        />)
            )
    }
    </div>
  )
}

export default Options