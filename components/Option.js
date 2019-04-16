import React from 'react';
const Option = (props) => (
  <div>
 <p>{props.option}</p>
 <button onClick = {(e)=>{ props.handleDeleteProp(props.option) }}>REMOVE</button>
  </div>
)

export default Option