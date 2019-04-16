class Counter extends React.Component{
  constructor(props){
    super(props);
    this.minusOne = this.minusOne.bind(this);
    this.plusOne = this.plusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: props.count
    }
  }
  
  plusOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
render(){
 return (
    <div>
    <h1>Counter: {this.state.count}</h1>
    <button onClick = {this.minusOne}>-1</button>
    <button onClick = {this.plusOne}>+1</button>
    <button onClick = {this.reset}>RESET</button>
    </div>
  )
}
minusOne(){
 this.setState((prevState) => {
   return {
     count: prevState.count - 1
   }
 })
}

reset(){
  this.setState(() => ({count:0}))
}
}
Counter.defaultProps = {
  count : 1
}
ReactDOM.render(<Counter count = {2}/>, document.querySelector('#app'))