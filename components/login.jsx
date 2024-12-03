import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Login = ({setToken, token}) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)

  const onSubmit = async(event) => {
    event.preventDefault()
    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    const tokenBack = await response.json();
    const accessToken = tokenBack.token;
    setToken(accessToken);
    localStorage.setItem('token', accessToken);
    setEmail(``)
    setPassword(``)
    navigate("/allbooks")
    }

  return (
    <>
      <h2>Log In</h2>
      {
        token? 
        <p>You Are Logged In</p>: 
        <> 
          <form onSubmit={onSubmit}>
            <input onChange={(event) => {setEmail(event.target.value)}}placeholder="email" type="email" value={email}/>
            <input onChange={(event) => {setPassword(event.target.value)}}placeholder="password" type="password" value={password}/>
            <button>Submit</button>
          </form>
          <section>
            <h4>Need An Account?</h4>
            <button onClick={()=>{navigate("/register")}}>Register Now</button>
          </section>
        </>
      }
    </>
  )
}

export default Login