import React, { useState, useEffect } from "react"
import { getUser } from "../services/auth"
import axios from "axios"

const Profile = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:3000/api/users")
      setUsers(res.data)
      console.log("useEffect ran")
    }
    fetchUsers()
  }, [])

  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {getUser().name}</li>
        <li>E-mail: {getUser().email}</li>
      </ul>

      <>
        {users.map(user => (
          <div>{user.username}</div>
        ))}
      </>
    </>
  )
}

export default Profile
