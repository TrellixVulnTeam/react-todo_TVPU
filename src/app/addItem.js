//import react
var React = require('react');

//require('./css/addItem.css')
//create AddItem component

var AddItem = React.createClass({
  render:function(){
    return(
      <form id="add-todo" onSubmit={this.handleSubmit}>
        <input type="text" required ref="newItem" />
        {/*this reference will give the reference of entire i/p element*/}
        <input type="submit" value="Hit me" />
      </form>
    )
  },
  handleSubmit:function(e){
    //prevent the form submit from refreshing the page
    e.preventDefault();
    console.log(this.refs.newItem);
    console.log("value :"+this.refs.newItem.value);
    this.props.onAddItem(this.refs.newItem.value);
    this.refs.newItem.value="";
  }

})

 module.exports=AddItem;
