class Visibility extends React.Component {
  render(){
    return (<div>
      <h1>Visibility App</h1>
      <button onClick = {this.handleVisibility} >SHOW</button>
      {this.state.visibility || <p>click to hide</p>}
      </div>)
  }
  constructor(props){
  super(props)
this.handleVisibility = this.handleVisibility.bind(this)
this.state = {
  visibility : 'show this'
}
}
handleVisibility(){
this.setState((prevState) => {
  return {
    visibility : !prevState.visibility
  }
})
}

}

ReactDOM.render(<Visibility />, document.querySelector('#app'))