import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <section id="nav">
      <Link to={`/`}>Home</Link>
      <Link to={`/allbooks`}>Book List</Link>
    </section>
  )
}

export default NavBar