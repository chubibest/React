class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      options : []
    }
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteProp = this.handleDeleteProp.bind(this)
  }
  handleDeleteAll(){
    this.setState(()=>({ options: [] }))
  }
  handleDeleteProp(option){
    this.setState((prevState) => ({options : prevState.options.filter((item) => option !== item)}))
  }
  handlePick (){
    const item = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[item];
   alert(option);
  }
  handleAddOption(option){
    if(!option){
      return 'Enter valid input'
    }else if(this.state.options.indexOf(option) > -1){
      return 'Item already exists'
    }
     this.setState((prevState)=> ({
         options:prevState.options.concat(option)
       }))
  }
  render(){
 const subtitle = 'Put your life in the hands of a computer'
  
    return(
      <div>
      <Header subtitle = {subtitle}/>
      <Action hasOptions = {this.state.options.length > 0} handlePick = {this.handlePick}/>
      <Addoption handleAddOption = {this.handleAddOption}/>
      <Options 
      handleDeleteProp = {this.handleDeleteProp}
      options = {this.state.options}
      handleDeleteAll = {this.handleDeleteAll}
      />
      </div>
    )
  }
}
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
const Action = (props) => {
  return (
    <div>
    <button disabled = {!props.hasOptions} onClick = {props.handlePick}>What should I do</button>
    </div>
  )
}

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

const Option = (props) => (
    <div>
   <p>{props.option}</p>
   <button onClick = {(e)=>{ props.handleDeleteProp(props.option) }}>REMOVE</button>
    </div>
  )


class Addoption extends React.Component {
  constructor(props){
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleFormSubmit(e){
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


const displayDiv = document.querySelector('#app')

ReactDOM.render(<IndecisionApp/>, displayDiv)