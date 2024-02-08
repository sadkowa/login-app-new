import '../App.css';

import React, { useEffect, useState } from 'react';
import LoginAuthApi from '../api/LoginAuthApi';

import {
  initUserData,
  userDataFields,
  fieldValidate,
  formValidate
} from '../helpers/formData';

import {
  Header,
  Form,
  Label,
  FormField,
  SubmitInput,
  Button,
  ErrorText,
  UserPage,
  NavBar,
  Dot,
  UserInfo,
  Container,
  DotsSection
} from './'

import { useStorage } from '../hooks/useStorage';
import img from './../assets/hello.png'

function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0)

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
      setFieldsErrors({ ...fieldsErrors, [name]: currentErrorMessage })
    }
  }

  const renderFields = () => {
    return userDataFields.map(field => {
      const { id, stepId, type, name, label } = field

      if (stepId === currentPageIndex) {
        return (
          <Label key={id}>{label}
            <FormField
              value={userData[name]}
              type={type}
              name={name}
              onChange={changeHandler}
              onBlur={() => blurHandler(field)}
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
      setFieldsErrors({ ...fieldsErrors, email: currentErrorMessage })
    }
    if (fieldsErrors.email === '') {
      setCurrentPageIndex(currentPageIndex + 1)
    }
  }

  const logOutHandler = () => {
    setLoggedIn(false)
    setFullName('')
    setCurrentPageIndex(0)
    removeData('token')
  }

  const clearFields = () => {
    setUserData(initUserData)
  }

  const changePageHandler = (e) => {

    if (currentPageIndex === 0) {
      nextButtonHandler(e)
    } else {
      setCurrentPageIndex(currentPageIndex - 1)
    }
  }

  const submitHandler = e => {
    e.preventDefault()

    const newErrors = formValidate(userData)

    if (Object.keys(newErrors).length !== 0) {
      setFieldsErrors({ ...fieldsErrors, ...newErrors })
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
            <UserInfo fullName={fullName}/>
            <Button onClick={logOutHandler}>Log out</Button>
          </NavBar>
        }
      </Header>
      {!loggedIn
        ? 
        <Form
          onSubmit={submitHandler}
          onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
        >
          {renderFields()}
          {currentPageIndex === 0 && (
          <Label>
              <Button onClick={nextButtonHandler}>Next</Button>
            </Label>)}
          {currentPageIndex === 1 && (
            <Label>
              <SubmitInput type='submit' value="submit" />
            </Label>)}
          <Container>
            {apiError && <ErrorText>{apiError}</ErrorText>}
          </Container>
          <DotsSection>
            <Dot
              active={currentPageIndex === 0}
              onClick={changePageHandler}
            />
            <Dot
              active={currentPageIndex === 1}
              onClick={changePageHandler}
            />
          </DotsSection>
        </Form>
        :
        <UserPage>
          <h2>You are logged in!</h2>
          {fullName && <h3>Welcome,<p>{fullName}</p></h3>}
          <img src={img} alt="hello" />
        </UserPage>
      }
    </div>
  );
}

export default App;
