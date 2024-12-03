import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import AllBooks from "../components/all-books"
import ShowSelectedBook from "../components/single-book"
import MainPage from "../components/homepage"
import NavBar from "../components/navbar"
import Login from "../components/login"
import Register from "../components/register"
import Profile from "../components/profile"

const App = () => {
  const [token, setToken] = useState(localStorage.getItem(`token`))

  const logout = () => {
    localStorage.removeItem("token")
    setToken(``)
    location.reload()
  }

  return (
    <>
      <nav>
        <NavBar token={token}/> 
        {
          token? <button onClick={logout}>Logout</button>: null
        }
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login" element={<Login setToken={setToken} token={token}/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/allbooks" element={<AllBooks/>}/>
        <Route path="/allbooks/:id" element={<ShowSelectedBook/>}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </>
  )
}

export default App
