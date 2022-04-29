import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';

const Dashboard: React.FunctionComponent = () => {

  const [currentInput, setCurrentInput] = React.useState('')
  const [list, setList] = React.useState<string[]>([]);

  const AddTodo = (event) => {
    event.preventDefault();
    // const newList = list;
    // newList.push(currentInput);
    setList([...list, currentInput]);
    setCurrentInput("");
    console.log(list);
  }
  return (
  <PageSection>
    <Title headingLevel="h1" size="lg">Dashboard Page Title!</Title>
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
