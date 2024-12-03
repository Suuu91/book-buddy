import { useNavigate } from "react-router-dom"

const MainPage = () => {
  const navigate = useNavigate()

  return (
    <section>
      <h1>Welcome to Book Buddies !</h1>
      <button onClick={()=>{navigate('/register')}}>New User</button>
      <button onClick={()=>{navigate('/login')}}>Existing User</button>
    </section>
  )
}

export default MainPage