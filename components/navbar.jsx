import { Link } from "react-router-dom";

const NavBar = ({token}) => {

  return (
    <section id="nav">
      <Link to={`/`}>Home</Link>
      <Link to={`/allbooks`}>Book List</Link>
      {
        token? 
        <Link to={'/profile'}>Profile</Link>:
        null
      }
    </section>
  )
}

export default NavBar