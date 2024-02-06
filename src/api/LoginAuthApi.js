import { loginApi, authUserApi } from "."

class LoginAuthApi {

    login(data) {
        return fetch(loginApi, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
            // body: JSON.stringify({
            //     email: 'candidate@test.com',
            //     userName: 'tester',
            //     password: 'test1234',
            // })
        })
            .then(this.handleErrors)
            .then(resp => resp.json())
    }

    getFullName(token) {
        return fetch(authUserApi, {
            method: "GET",
            headers: {
                "Authorization": token
            },
        })
            .then(this.handleErrors)
            .then(resp => resp.json())
    }

    handleErrors(resp) {
        if (!resp.ok) {
            return resp.json()
                .then(errorData => {
                    // Promise.reject(new Error(errorData.message))
                    throw new Error(errorData.message)
                })
        } return resp
    }

}

export default LoginAuthApi