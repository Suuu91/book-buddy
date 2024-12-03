import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  const [firstname, setFirstname] = useState(``)
  const [lastname, setLastname] = useState(``)
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)

  const onSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register`, {
      method: "post",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
      })
    }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);

    setFirstname(``)
    setLastname(``)
    setEmail(``)
    setPassword(``)
  }
  return (
    <>
      <h2>Register Here</h2>
      <form onSubmit={onSubmit}>
        <input onChange={(event) => {setFirstname(event.target.value)}} placeholder="first name" value={firstname}/>
        <input onChange={(event) => {setLastname(event.target.value)}}placeholder="last name" value={lastname}/>
        <input onChange={(event) => {setEmail(event.target.value)}}placeholder="email" type="email" value={email}/>
        <input onChange={(event) => {setPassword(event.target.value)}}placeholder="password" type="password" value={password}/>
        <button>Register</button>
      </form>
      <section>
        <h4>Have An Account?</h4>
        <button onClick={()=>{navigate("/login")}}>Login Now</button>
      </section>
    </>
  )
}

export default Register