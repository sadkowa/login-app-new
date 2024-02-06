import '../App.css';

import React, { useState } from 'react';
import LoginAuthApi from '../api/LoginAuthApi';

import { initUserData, userDataFields, fieldValidate, formValidate } from '../helpers/formData';

import { Header } from './Header';
import { Form } from './Form';
import { Label } from './Label';
import { FormField } from './FormField';
import { SubmitInput } from './SubmitInput';
import { Button } from './Button';
import { Error } from './Error';

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const [userData, setUserData] = useState(initUserData)
  const [errors, setErrors] = useState({})

  const [token, setToken] = useState('')
  const [error, setError] = useState('')
  const loginApi = new LoginAuthApi()


  const changeHandler = (e, field) => {
    const { name, value } = e.target
    setErrors({ ...errors, [name]: '' })
    setUserData({ ...userData, [name]: value })
  }

  const blurHandler = (e, field) => {
    const { name } = field
    const currentErrorMessage = fieldValidate(field, userData)

    if (currentErrorMessage) {
      setErrors({ ...errors, [name]: [currentErrorMessage] })

    }
  }

  const renderFields = () => {
    return userDataFields.map(field => {
      const { id, stepId, type, name, label } = field

      if (stepId === currentStepIndex) {
        return (
          <Label key={id}>{label}
            <FormField
              value={userData[name]}
              type={type}
              name={name}
              onChange={e => changeHandler(e, field)}
              onBlur={e => blurHandler(e, field)}
            />
            {errors[name] && <Error>{errors[name]}</Error>}
          </Label>
        )
      }
    })
  }

  const clickNextButton = () => {
    if (errors.email === '') {
      setCurrentStepIndex(currentStepIndex + 1)
    }
  }

  const submitHandler = e => {
    e.preventDefault()

    const newErrors = formValidate(userData)

    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors)
    }
    else {
      loginApi.login(userData)
        .then(data => {
          console.log(data)
          setToken(data)
        })
        .catch(error => {
          console.log(error)
          // setError(error)
        })
    }
  }

  return (
    <div className='App'>
      <Header>Login App</Header>
      <Form onSubmit={submitHandler}>
        {renderFields()}
        {currentStepIndex === 0 && (
          <Label>
            <Button onClick={clickNextButton}>Next</Button>
            {/* <SubmitInput type='submit' value="next" /> */}
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
