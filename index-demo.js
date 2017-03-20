// using js syntax
var React = require('react');
var ReactDOM =  require('react-dom');
//create the component
var ToDoComponent = React.createClass({
  /*state is used to hold data in a component,
   where as props are used to communicate data between parent and child components*/
 getInitialState:function(){
   //this sets the initial state of the component
   //returns a state obj
    return{
      todos:["washup","eat cheese","take a nap"],
      age:30
      //time:1
    }
 },
  render:function(){
    //return is a method here
    //this =  component
    var timer =  setTimeout(function(){
      //this  = setTimeout so bind Component here
      this.setState({
        //we can pass only the property that needs to be updated
        age : 35
      })
    }.bind(this),5000);
                                      // var interval = setInterval(function(){
                                      //   //update the time variable
                                      //   this.setState({
                                      //     time:this.state.time+1
                                      //   })
                                      //   console.log(this.state.time);
                                      // }.bind(this),1000)

    //iterating through todos
    //create a  local version of todos so that we wont alter the main state todos
    var todos = this.state.todos;
    todos = todos.map(function(item,index){
      return(
        <li key={index}>{item}</li>
      )
    })

    var todoitems=this.state.todos;
    todoitems=todoitems.map((item,index)=>
      //key is unique identifier
      <TodoItem item={item} key = {index} />
  )
    return(
      <div>
        <div>
          <h2>Details</h2>
          <p><strong>Name: </strong>{this.props.obj.name}</p>
          <p><strong>Age: </strong> {this.props.obj.age}</p>
          <p><strong>Height: </strong>{this.props.obj.height}</p>
        </div>
        <div>
          <h2>State example</h2>
          age : {this.state.age}
          {/*time : {this.state.time} */}
          <p>this will change in 5 seconds</p>
          <ul>
            <li key="1">{this.state.todos[0]}</li>
            <li key="2">{this.state.todos[1]}</li>
            <li key="3">{this.state.todos[2]}</li>
            <li key="4">{this.state.todos}</li>
            {/*react converts an array to text*/}
            <ol>{todos}</ol>
            {/*child component*/}
            <li>Child component<br/>
              <ol type="a">
                {todoitems}
              </ol>

            </li>

          </ul>
        </div>
      </div>

    )
  }
})
//child component
var TodoItem = React.createClass({
  render:function(){
    return(
      <li className="todo-list">
        <div className="todo-item">{this.props.item}</div>
      </li>
    )
  }
})


var bioData = {"name":"Preetham","age":23,"height":"172cms"};

//put the component in DOM
//component needs to be represented as a css selector in the first arg
ReactDOM.render(<ToDoComponent msg="this is a test msg from props" obj = {bioData}
 />,document.getElementById('todo-wrapper'))
