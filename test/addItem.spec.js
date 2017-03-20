import React from 'react';
import {mount,shallow} from 'enzyme';
import {assert} from 'chai';
import AddItem from '../src/app/addItem';
import sinon from 'sinon';

describe('<AddItem /> testing',function(){
    it('should contain a form, a input text element and a submit button',function(done){
        const addItem = mount(<AddItem />);
        //console.log()
       assert.equal(addItem.find('form').length, 1, "[the component contains a single form element]");
        assert.equal(addItem.find('input[type="text"]').length,1,"[the component contains a single input text element]");
        assert.equal(addItem.find('input[type="submit"]').length,1,"[the component contains a single submit button element]");
       // assert.isDefined(addItem.props().onAddItem,'onAddItem to be defined');
       // assert.isDefined(addItem.handleSubmit,'handle submit to be defined');
      // console.log(addItem.node.handleSubmit);
      done();
    });
     it('should call handleSubmit function on form submit and post data to onadditem method',function(done){
      
        var onAddItem = sinon.spy();
        const addItem = mount(<AddItem onAddItem={onAddItem} />);
        //console.log()
      
        assert.isDefined(addItem.props().onAddItem,'onAddItem to be defined');
        assert.isDefined(addItem.get(0).handleSubmit,'handle submit to be defined');
        //get(0) gives the node
        addItem.ref('newItem').get(0).value='new value';
        addItem.find('form').simulate('submit');
        
        assert.isDefined(onAddItem.calledOnce,'onAddItem  to be called once');
        assert.isTrue(onAddItem.calledWith('new value'),'onAddItem method to be called with the new value in the textbox');

        done();
    //    console.log(addItem.ref('newItem').get(0).value)
    //    console.log(onAddItem.args);
      // console.log(addItem.node.handleSubmit);
    });
   

})


