import { v4 as uuid } from "uuid";

const initUserData = {
    email: '',
    userName: '',
    password: ''
}

const userDataFields = [
    {
        id: uuid(),
        stepId: 0,
        type: 'text',
        name: "email",
        label: 'Email',
        required: true,
        pattern: /^[-\w.]+@([-\w]+\.)+[a-z]+$/i
    },
    {
        id: uuid(),
        stepId: 1,
        type: 'text',
        name: "userName",
        label: 'Login',
        required: true,
        pattern: /^[\w-_.]{5,15}$/i
    },
    {
        id: uuid(),
        stepId: 1,
        type: 'password',
        name: "password",
        label: 'Password',
        required: true,
        pattern: /^(?=.*[0-9])(?=.*[a-z]).{8,}$/
    },
]

const errorMessages = {
    email: "Please enter a valid email address",
    userName: "User name must contain 5-15 characters",
    password: "Password must contain at least 8 characters and at least 1 number",
  };

const fieldValidate = (field, data) => {
    let error
    const { name, pattern, required } = field

    const value = data[name]

    if (required) {
        if (value.length === 0) {
            error = `This field is required`
        } else {
            if (pattern) {
                const test = pattern.test(value)
                if (!test) {
                    error = errorMessages[name]
                }
            }
        }
    }
    return error
}

const formValidate = data => {
    const errors = {}

    userDataFields.forEach(field => {
        const newErrorMessage = fieldValidate(field, data)

        if (typeof newErrorMessage !== 'undefined') {
            errors[field.name] = []
            errors[field.name].push(fieldValidate(field, data))
        }
    })
    return errors
}

export { initUserData, userDataFields, formValidate, fieldValidate }