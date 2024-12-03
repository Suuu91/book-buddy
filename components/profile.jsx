import { useEffect, useState } from "react";

const Profile = ({token}) => {
  const [userProfile, setUserProfile] = useState({})
  const [userBooks, setUserBooks] = useState([])

  useEffect(()=>{    
    const getUserInfo = async() => {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
      })
      const userInfo = await response.json()
      setUserProfile(userInfo)
      setUserBooks(userInfo.books)
    }
    getUserInfo()
  }, [])

  return(
    <>
      <h1>Profile</h1>
      <h3>User: {userProfile.firstname} {userProfile.lastname}</h3>
      <h3>Email: {userProfile.email}</h3>
      <section>
        <h2>Books</h2>
        {
          userBooks.map((book) => {
            return (
              <li>{book}</li>
            )
          })
        }
      </section>
    </>
  )
}

export default Profile