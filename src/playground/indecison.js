console.log('App.js is running!');
const app = {
  title:'indecision app',
  options: []
}
const submit  = (e) => {
  if(!app.options){
    app.options = [];
  }
  e.preventDefault();
  const option = e.target.elements.option.value;
  e.target.elements.option.value = ''
  app.options.push(option);
  render();
}

const removeAll = () => {
  delete app.options
  console.log(app.options)
  render()
}

const appRoot = document.querySelector('#app');
const render = () => {
 const template = (
    <div>
       <h1>{app.title}</h1>
       <p>{(app.options && app.options[app.options.length - 1]) && app.options[app.options.length - 1]}</p>
       <form onSubmit = {submit}>
       <input type= "text" name = 'option'></input>
       <button>SUBMIT</button>
       </form>
       <ol>
       {app.options && app.options.map((value,index)=><li key = {index}>{value}</li>)} 
       </ol>
       <button onClick= {removeAll}>REMOVE ALL</button>
    </div>
  )
  ReactDOM.render(template, appRoot)
}
render()