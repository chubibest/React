import React from 'react'
const Header = (props) => {
  return(
    <div>
    <h1>{props.title}</h1>
    <h1>I added a new header cos i can</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title : 'Indecision App'
}
  export default Header;