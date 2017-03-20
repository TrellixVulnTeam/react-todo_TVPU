import React from 'react';
import {mount,shallow} from 'enzyme';
import {assert} from 'chai';
import TodoItem from '../src/app/TodoItem';
import sinon from 'sinon';
 let todoItem  = shallow(<TodoItem />);
describe("<TodoItem /> testing",()=>{
    it('should have an list item',(done)=>{
       // let todoItem = shallow(<TodoItem />);
        assert.equal(todoItem.find('.todo-item').length,1);
        done();
    });
    it('should contain two childs in List item',(done)=>{
        //let todoItem  = shallow(<TodoItem />);
       

        assert.equal(todoItem.find('.todo-item').find('.item-name').length,1);
        assert.equal(todoItem.find('.todo-item').find('.item-remove').length,1);
        done();
    });
    it("should have handledelete fn defined",(done)=>{
        // need to be mounted to get this of the element
         let todoItem  = mount(<TodoItem />);
        assert.isDefined(todoItem.get(0).handleDelete)
        done();
    });
    it("should call delete function in parent with proper args",(done)=>{
        // need to be mounted to get this of the element
         let onDelete = sinon.spy();
         let todoItem  = mount(<TodoItem item="todo sample" onDelete={onDelete} />);
         todoItem.find('.item-remove').simulate('click');
         assert.isTrue(onDelete.calledOnce);
         assert.isTrue(onDelete.calledWith("todo sample"));
         done();
    });
   
    
})