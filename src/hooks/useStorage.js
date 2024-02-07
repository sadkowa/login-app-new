export const useStorage = () => {

    const getData = name => sessionStorage.getItem(name)
    const sendData = (name, data) => sessionStorage.setItem(name, data)
    const removeData = name => sessionStorage.removeItem(name)

    return [getData, sendData, removeData]
}
