import React from 'react'
import Addoption from './Addoption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'


export default class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  }
  handleDeleteAll = () => {
    this.setState(()=>({ options: [] }))
  }
  handleDeleteProp = (option) => {
    this.setState((prevState) => ({options : prevState.options.filter((item) => option !== item)}))
  }
  clear = () => {
    this.setState(()=>({selectedOption:undefined}))
  }
  handlePick = () => {
    const item = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[item];
   this.setState(() => ({selectedOption :option}))
  }
  handleAddOption = (option) => {
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
      <OptionModal selectedOption = {this.state.selectedOption} clear = {this.clear}/>
      </div>
    )
  }
}
