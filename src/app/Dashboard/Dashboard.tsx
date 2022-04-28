import * as React from 'react';
import { ActionGroup, Button, DatePicker, Radio, Form, FormGroup, NumberInput, PageSection, Select, TextInput, Title, Dropdown, DropdownItem, DropdownSeparator, DropdownToggle } from '@patternfly/react-core';
import { isCallChain } from 'typescript';

const Dashboard: React.FunctionComponent = () => {

  const [value, setValue] = React.useState("");

  const [age, setAge] = React.useState(0);

  const [male, setMale] = React.useState("");

  const [female, setFemale] = React.useState("");

  const [close, setClose] = React.useState();

  const [open, setOpen] = React.useState(false);


  console.log(value)

  const onClickMale = () => {
    setValue(value)
  }

  const onClickFemale = () => {
    setValue(value)
  }

  const onChangeValue = (value) => {
    setValue(value)
  }
  console.log(age)


  const onClickPlus = () => {
    setAge(age + 1)
  }

  const onClickMinus = () => {
    if (age > 0) {
      setAge(age - 1)
    }


  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  }

  const handleSubmit = (value) => {
    setValue(value)
    

  };
 
 
    const handleClose = () => {
      setOpen(false);
    };
   
    const handleClick = () => {
      setOpen(true);
    }

// const onClickOpen = () => {
    
  }

  const [gender, setGender] = React.useState("");

  const [isChecked, setIsChecked] = React.useState(false);

  
  
  console.log(isChecked)
  const onChangeRadio = (_, event) => {
    console.log(event.target.value)
    setIsChecked(!isChecked)
  }

  return (
    <PageSection>
      <Form>
        <FormGroup label="Full name" isRequired fieldId="simple-form-email-01" >
          <TextInput value={value} onChange={onChangeValue}>

          </TextInput>

        </FormGroup> 

        <FormGroup label="Age" isRequired fieldId="simple-form-email-01">
          <NumberInput value={age} onMinus={onClickMinus} onPlus={onClickPlus} >

          </NumberInput>


        </FormGroup> 
        <FormGroup fieldId={"radio button"}>
        <Radio name="radio-1"
        isChecked={isChecked}
        onChange={onChangeRadio}
          label="Male"
          id="radio-controlled"
          value={"male"}
         
          >

        </Radio>
        <Radio name="radio-1"
        isChecked={isChecked}
        onChange={onChangeRadio}
          label="Female"
          id="radio-controlled"
          value={"female"}
>
        </Radio>
        </FormGroup>
        <FormGroup fieldId={"Dropdown"}>
        {/* <DropdownToggle id="toggle-id" value={value} >
            Months
       </DropdownToggle> */}
        </FormGroup>


        <ActionGroup>
          <Button variant="primary">Submit</Button>
          <Button variant="link">Cancel</Button>
          {/* <Button variant="primary" onClick={() => {}}>Submit</Button> */}

  <button type="submit" onClick={(e)=>onsubmit}>submit</button>
          
          
        </ActionGroup>

      </Form>

    </PageSection>
  )

}

export { Dashboard };
