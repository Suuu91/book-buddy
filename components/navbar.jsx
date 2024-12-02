import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <>
      <Link to={`/`}>Home</Link>
      <Link to={`/allbooks`}>Book List</Link>
    </>
  )
}

export default NavBar