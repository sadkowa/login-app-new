import '../App.css';

import React, { useState } from 'react';
import LoginAuthApi from '../api/LoginAuthApi';

import { initUserData, userDataFields } from '../helpers/formData';

import { Header } from './Header';
import { Form } from './Form';

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(1)

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
          <label key={id}>{label}
            <input
              type={type}
              name={name}
            />
          </label>
        )
      }
    })
  }

  const submitHandler = e => {
    e.preventDefault()
    console.log('clicked')
  }

  return (
    <div className='App'>
      <Header>Login App</Header>
      <Form onSubmit={submitHandler}>
        {renderFields()}
        {currentStepIndex === 0 && (
          <input type='submit' value="next" />
        )}
        {currentStepIndex === 1 && (
          <input type='submit' value="submit" />
        )}
      </Form>
    </div>
  );
}

export default App;
