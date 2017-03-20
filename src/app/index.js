// using js syntax
var React = require('react');
var ReactDOM =  require('react-dom');
//name of the selector
var TodoItem =  require('./todoItem');
var AddItem = require('./addItem');
var routes = require('./routes')
//ES6 syntax
import About from './about';
//css loader and style loaders will load css into the jsx
//require('./css/index.css');
import {Router,Route,browserHistory,Link} from 'react-router';
//grpc
var PROTO_PATH = __dirname + '/proto/helloworld.proto';

var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;

console.log(PROTO_PATH);

//create app component
var App =  React.createClass({
  render:function(){
   // return routes;
      return(
        <Router history={browserHistory}>
          <Route path={'/'} component={ToDoComponent}></Route>
          <Route path={'/about'} name="Preetham" component={About}></Route>
        </Router>
      )
  // }*/
  //return ( <Router history={browserHistory} routes={routes} onUpdate={()=>window.scrollTo(0,0)} />);
}
});


//create the component
var ToDoComponent = React.createClass({ 
  /*state is used to hold data in a component,
   where as props are used to communicate data between parent and child components*/
 getInitialState:function(){
   //this sets the initial state of the component
   //returns a state obj
    return{
      todos:["pay power bill","go to office","check emails"]
    }
 },
 componentDidMount:function(){
    var client = new hello_proto.Greeter('localhost:50051',
                                       grpc.credentials.createInsecure());
     client.getTodos({},function(err,res){
    console.log("todos "+res.todos);
  })                                  
 },
  render:function(){
    //return is a method here
    //this =  component

    //iterating through todos
    //create a  local version of todos so that we wont alter the main state todos

    var todoitems=this.state.todos;
    todoitems=todoitems.map((item,index)=>
      //key is unique identifier
      //the reactSelectors need to start with caps letter to differentiate it from html tags
      <TodoItem item={item} key = {index} onDelete={this.onDelete} />
  )
    return(
      <div id="todo-list">
            <Link to={'/about'} >About</Link>
            <p>To do</p>
              <ul>
                {todoitems}
              </ul>
              <AddItem onAddItem={this.AddItem}/>
      </div>

    )


  },
  onDelete:function(item){
      var updatedTodoItems=this.state.todos.filter((val,index)=>
              val!==item
    );
    this.setState({
      todos:updatedTodoItems
    })
  },
  AddItem:function(item){
    var updatedTodoItems = this.state.todos;
    updatedTodoItems.push(item);
    this.setState({
      todos:updatedTodoItems
    })
  }
})

module.exports={
  App:App,
  ToDoComponent:ToDoComponent
};
if(typeof window !== 'undefined') {
ReactDOM.render(<App />,document.getElementById('todo-wrapper'))
}