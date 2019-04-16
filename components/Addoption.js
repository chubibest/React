import React from 'react'

export default class Addoption extends React.Component {
  state = {
    error: undefined
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    const input = e.target.elements.text.value.trim();
    const error = this.props.handleAddOption(input)
   this.setState(()=> ({ error }))
  }
  render(){
    return(
      <div>
       {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit = {this.handleFormSubmit}>
      <input type="text" name = "text"></input>
      <button>SUBMIT</button>
      </form>
      <p>Add Option component here.</p>
      </div>
    )
  }
}