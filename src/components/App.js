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
import { NavBar } from './NavBar';

import { useStorage } from '../hooks/useStorage';
import img from './../assets/hello.png'

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const [userData, setUserData] = useState(initUserData)
  const [fieldsErrors, setFieldsErrors] = useState({})

  const [loggedIn, setLoggedIn] = useState(false)
  const [apiError, setApiError] = useState('')
  const [fullName, setFullName] = useState('')

  const [getData, sendData, removeData] = useStorage()

  const loginApi = new LoginAuthApi()

  useEffect(() => {
    const token = getData('token')

    if (token) {
      setLoggedIn(true)
      loadFullUserName(token)
    }
  }, [])

  const loadFullUserName = token => {
    loginApi.getFullName(token)
      .then(data => setFullName(data.fullUserName))
      .catch(error => console.error(error.message))
  }

  const changeHandler = e => {
    const { name, value } = e.target

    setFieldsErrors({ ...fieldsErrors, [name]: '' })
    setApiError('')
    setUserData({ ...userData, [name]: value })
  }

  const blurHandler = field => {
    const { name } = field
    const currentErrorMessage = fieldValidate(field, userData)

    if (currentErrorMessage) {
      setFieldsErrors({ ...fieldsErrors, [name]: [currentErrorMessage] })
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
            {fieldsErrors[name] && <ErrorText>{fieldsErrors[name]}</ErrorText>}
          </Label>
        )
      } 
    })
  }

  const nextButtonHandler = e => {
    e.preventDefault()
    const [email] = userDataFields

    const currentErrorMessage = fieldValidate(email, userData)

    if (currentErrorMessage) {
      setFieldsErrors({ ...fieldsErrors, email: [currentErrorMessage] })
    }
    if (fieldsErrors.email === '') {
      setCurrentStepIndex(currentStepIndex + 1)
    }
  }

  const logOutHandler = () => {
    setLoggedIn(false)
    setFullName('')
    setCurrentStepIndex(0)
    removeData('token')
  }

  const clearFields = () => {
    setUserData(initUserData)
  }

  const submitHandler = e => {
    e.preventDefault()

    const newErrors = formValidate(userData)

    if (Object.keys(newErrors).length !== 0) {
      setFieldsErrors(newErrors)
    }
    else {
      loginApi.login(userData)
        .then(data => {
          const { token } = data

          setLoggedIn(true)
          sendData('token', token)
          loadFullUserName(token)
          clearFields()
        })
        .catch(error => setApiError(error.message))
    }
  }

  return (
    <div className='App'>
      <Header>
        <h1>Login App</h1>
        {loggedIn &&
          <NavBar>
            <span>Signed as: <br /><em>{fullName}</em></span>
            <Button onClick={logOutHandler}>Log out</Button>
          </NavBar>
        }
      </Header>
      {!loggedIn
        ? 
        <Form onSubmit={submitHandler}>
          {renderFields()}
          {currentStepIndex === 0 && (
          <Label>
              <Button onClick={nextButtonHandler}>Next</Button>
            </Label>)}
          {currentStepIndex === 1 && (
            <Label>
              <SubmitInput type='submit' value="submit" />
            </Label>)}
          {apiError && <ErrorText>{apiError}</ErrorText>}
        </Form>
        :
        <UserPanel>
          <h2>You are logged in! </h2>
          {fullName && <h3>Welcome,<p>{fullName}</p></h3>}
          <img src={img} alt="hello" />
        </UserPanel>
      }
    </div>
  );
}

export default App;
