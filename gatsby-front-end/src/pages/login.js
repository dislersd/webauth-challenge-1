import React, { useReducer } from "react"
import axios from "axios"

const Login = () => {
  // using reducer for multiple input value control
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: "",
      password: "",
    }
  )

  const handleChange = event => {
    const { name, value } = event.target
    setUserInput({ [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const creds = {
        username: userInput.username,
        password: userInput.password,
      }
      console.log(creds)
      const res = await axios.post("http://localhost:3000/api/login", creds)
      console.log(res)
    } catch (error) {
      console.log("you broke it");
    }
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        name="username"
        value={userInput.username}
        onChange={handleChange}
        placeholder="username"
      />
      <input
        type="password"
        name="password"
        value={userInput.password}
        onChange={handleChange}
        placeholder="password"
      />
      <button>Login</button>
    </form>
  )
}

export default Login
