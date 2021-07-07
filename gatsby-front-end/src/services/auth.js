import axios from "axios"

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.sessionStorage.getItem("user")
    ? JSON.parse(window.sessionStorage.getItem("user"))
    : {}

const setUser = user =>
  window.sessionStorage.setItem("user", JSON.stringify(user))

export const handleLogin = state => {
  axios
    .post("http://localhost:3000/api/login", state)
    .then(res => setUser(res.data.cookie.username))
    .catch(err => console.log(err))
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
