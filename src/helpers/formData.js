import { v4 as uuid } from "uuid";

const initUserData = {
    email: '',
    login: '',
    password: ''
}

const userDataFields = [
    { id: uuid(), stepId: 0, type: 'text', name: "email", label: 'Email', required: true, pattern: /^[-\w.]+@([-\w]+\.)+[a-z]+$/i },
    { id: uuid(), stepId: 1, type: 'text', name: "login", label: 'Login', required: true },
    { id: uuid(), stepId: 1, type: 'password', name: "password", label: 'Password', required: true },
]

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
                    error = `Correct the entered data`
                }
            }
        }
    }

    return error
}

export { initUserData, userDataFields, formValidate, fieldValidate }