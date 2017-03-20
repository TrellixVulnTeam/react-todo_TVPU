var React = require('react');
// if we would have loaded react using script tag in index.html this wouldnt be required
//but since we modularized using webpack we need to import react again
//require('./css/todoItem.css')
//child component
var TodoItem = React.createClass({
  render:function(){
    return(
      <li className="todo-item">
        <span className="item-name">{this.props.item}</span>
        <span className="item-remove" onClick={this.handleDelete}> x </span>
        {/*instead of creating a new method in childComponent
          we can use arrow function to invoke the delete fn
        <span className="todo-delete-special" onClick={(e)=>this.props.onDelete(this.props.item)}> x </span>
        */}
      </li>
    )
  },
handleDelete:function(){
  this.props.onDelete(this.props.item);
},
componentWillMount:function(){
  console.log('TodoItem Component will mount');
},
componentDidMount:function(){
  console.log('TodoItem Component Did mount!')
},
componentWillReceiveProps:function(newProps){
console.log("Component will receive props");
console.log(newProps);

},
shouldComponentUpdate:function(newProps,newState){
   console.log("component should update"); 
  console.log(newProps);
  console.log(newState);
return true;
},
componentWillUpdate:function(nextProps,nextState){
 
  console.log('component will update');
   console.log(nextProps);
    console.log(nextState);
},
componentDidUpdate:function(prevProps,prevState){
console.log('component did update');
 console.log(prevProps);
    console.log(prevState);
},
componentWillUnmount:function(){
console.log('component will unmount');
}

})

module.exports = TodoItem;
