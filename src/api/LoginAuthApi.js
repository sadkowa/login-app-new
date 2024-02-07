import { loginApi, authUserApi } from "."

class LoginAuthApi {

    login(data) {
        return fetch(loginApi, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(this.handleErrors)
            .then(resp => resp.json())
    }

    getFullName(token) {
        return fetch(authUserApi, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
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
                    throw new Error(errorData.message)
                })
        } return resp
    }
}

export default LoginAuthApi