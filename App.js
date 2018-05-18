import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './people.json';
class App extends Component {


  details(index){
    let data = this.state.data;
    let todo = data.find(function(todo){
      return todo.counter ===index
    });
    console.log("you are clicking");
    console.log("hello"); 
  }

  removeTodo(index)
  {
    let data=this.state.data;
    let todo = data.find(function(todo){
    return todo.counter===index
      }); 

      data.splice(todo,1);
      this.setState({
        data:data
      });
  }

  addTodo(event)
  {
    event.preventDefault();
    let id= this.refs.id.value;
    let name= this.refs.name.value;
    let Description= this.refs.Description.value;
    let counter=this.state.counter;

    let todo={
      id,
      name,
      Description,
      counter
    };
    counter+=1; 
    let data = this.state.data;
    data.push(todo);

    this.setState({
      data:data,
      counter:counter
    });

  this.refs.todoForm.reset();
  }

constructor(){
  super();
  this.addTodo= this.addTodo.bind(this);
  this.removeTodo = this.removeTodo.bind(this);
  this.details=this.details.bind(this);
  this.state ={
  data:[],
  title:'REACT SIMPLE CRUD APPLICATION',
  subtitle:'fill this form',
  counter:0
  }

}

  render() {
    let title= this.state.title;
    let subtitle= this.state.subtitle;
    let data = this.state.data;
    return (
      <div className="App col-sm-8 panel-heading">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
      

      <div className=" bs-example">  

        <form ref="todoForm">
        <div className="bs-example">

        <label for="inputID">ID</label>
          <input className="form-control" type="text" ref="id" placeholder="ID"/>
          </div>

          <div className="form-group">
          <label for="inputName">Name</label>
          <input className="form-control" type="text" ref="name" placeholder="name"/>
          </div>

          <div>
          <span>Description </span><textarea rows="4" cols="40" className="form-control"  ref="Description" > </textarea>
          </div>

          <div><button className="button4" onClick={this.addTodo}>Add New</button></div>
        </form>
      </div>  
      
    
        <div  className="col-sm-8 " >
  
        
          {data.map(todo=> <ul key={todo.counter}>
            
            <div className="print"> {todo.id}</div>
            <div className="print">{todo.name}</div> 
            <div className="print">{todo.Description} </div> 
          <button className="button5"  onClick={this.removeTodo.bind(null,todo.counter)}> Remove </button>
          <button className="button4" onClick={this.details.bind(null,todo.counter)}> view  details </button>





          </ul>)}
        </div>
      </div>  
      
    );

    return (
        <ul>
        {
          data.map(function(people){
            return <li>{people.name} - {people.Description}</li>;
          })
        }
        </ul>
    );




  }





}

export default App;
