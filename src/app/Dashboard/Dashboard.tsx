import * as React from 'react';
import { ActionGroup, Button, DatePicker, Radio, Form, FormGroup, NumberInput, PageSection, Select, TextInput, Title, Dropdown, DropdownItem, DropdownSeparator, DropdownToggle } from '@patternfly/react-core';
import { isCallChain } from 'typescript';

const Dashboard: React.FunctionComponent = () => {

  const [currentInput, setCurrentInput] = React.useState('')
  const [list, setList] = React.useState([]);

  const AddTodo = (event) => {
    event.preventDefault();
    const newList = list;
    newList.push(currentInput);
    setList([...newList]);
    console.log(list);
  }
  return (
    <PageSection>

      <h1>TODO APP</h1>
<form className="input-box">
<input className="input" placeholder="enter you name" onChange={(event)=>{
  setCurrentInput(event.target.value)
}}/>


<button className="add-button" onClick={AddTodo}>Add</button>


</form>
{list.map((singleTodo)=>{
  return<div>{singleTodo}</div>
})}


</PageSection>

  )
}  


export { Dashboard };
