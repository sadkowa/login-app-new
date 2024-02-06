import '../App.css';

import React, { useState } from 'react';
import LoginAuthApi from '../api/LoginAuthApi';

import { initUserData, userDataFields } from '../helpers/formData';

import { Header } from './Header';
import { Form } from './Form';
import { Label } from './Label';
import { FormField } from './FormField';
import { SubmitInput } from './SubmitInput';

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const [userData, setUserData] = useState(initUserData)

  // const [token, setToken] = useState('')
  // const [error, setError] = useState('')
  // const loginApi = new LoginAuthApi()

  // loginApi.login()
  //   .then(data => setToken(data))
  //   .catch(error => {
  //     console.log(error)
  //     // setError(error)
  //   }
  //     )
  // .finally(()=> {
  //   loginApi.getFullName()


  const renderFields = () => {
    return userDataFields.map(field => {
      const { id, stepId, type, name, label } = field

      if (stepId === currentStepIndex) {
        return (
          <Label key={id}>{label}
            <FormField
              type={type}
              name={name}
            />
          </Label>
        )
      }
    })
  }

  const submitHandler = e => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <div className='App'>
      <Header>Login App</Header>
      <Form onSubmit={submitHandler}>
        {renderFields()}
        {currentStepIndex === 0 && (
          <Label>
            <SubmitInput type='submit' value="next" />
          </Label>
        )}
        {currentStepIndex === 1 && (
          <Label>
            <SubmitInput type='submit' value="submit" />
          </Label>
        )}
      </Form>
    </div>
  );
}

export default App;
