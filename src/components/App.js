import '../App.css';

import React, { useEffect, useState } from 'react';
import LoginAuthApi from '../api/LoginAuthApi';

import {
  initUserData,
  userDataFields,
  fieldValidate,
  formValidate
} from '../helpers/formData';

import { Header } from './Header';
import { Form } from './Form';
import { Label } from './Label';
import { FormField } from './FormField';
import { SubmitInput } from './SubmitInput';
import { Button } from './Button';
import { ErrorText } from './ErrorText';
import { UserPanel } from './UserPanel';

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const [userData, setUserData] = useState(initUserData)
  const [errors, setErrors] = useState({})

  const [loggedIn, setLoggedIn] = useState(false)
  const [errorApi, setErrorApi] = useState('')
  const [fullName, setFullName] = useState('')

  const loginApi = new LoginAuthApi()

  useEffect(() => {
    const token = JSON.parse(sessionStorage.getItem('token'))

    if (token) {
      setLoggedIn(true)
      loginApi.getFullName(token)
        .then(data => {
          setFullName(data.fullUserName)
        })
        .catch(error => {
          console.log(error.message)
        })
    }
  }, [])

  const changeHandler = e => {
    const { name, value } = e.target
    setErrors({ ...errors, [name]: '' })
    setErrorApi('')
    setUserData({ ...userData, [name]: value })
  }

  const blurHandler = field => {
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
              onChange={changeHandler}
              onBlur={e => blurHandler(field)}
            />
            {errors[name] && <ErrorText>{errors[name]}</ErrorText>}
          </Label>
        )
      }
    })
  }

  const clickNextButton = e => {
    e.preventDefault()

    const currentErrorMessage = fieldValidate(userDataFields[0], userData)

    if (currentErrorMessage) {
      setErrors({ ...errors, email: [currentErrorMessage] })
    }
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
          const { token } = data

          setLoggedIn(true)
          sessionStorage.setItem("token", JSON.stringify(token))
          loginApi.getFullName(token)
            .then(data => {
              console.log(token)
              setFullName(data.fullUserName)
            })
            .catch(error => {
              console.log(error.message)
            })
        })
        .catch(error => {
          setErrorApi(error.message)
        })
    }
  }

  return (
    <div className='App'>
      <Header>Login App</Header>
      {!loggedIn
        ? 
        <Form onSubmit={submitHandler}>
          {renderFields()}
          {currentStepIndex === 0 && (
          <Label>
              <Button onClick={clickNextButton}>Next</Button>
            </Label>)}
          {currentStepIndex === 1 && (
            <Label>
              <SubmitInput type='submit' value="submit" />
            </Label>)}
          {errorApi && <ErrorText>{errorApi}</ErrorText>}
        </Form>
        :
        <UserPanel>
          <h2>You are logged in! </h2>
          {fullName && <h3>Welcome,<p>{fullName}</p></h3>}
          😃
        </UserPanel>
      }
    </div>
  );
}

export default App;
