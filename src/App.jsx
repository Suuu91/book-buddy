import { Route, Routes } from "react-router-dom"
import AllBooks from "../components/all-books"
import ShowSelectedBook from "../components/single-book"
import MainPage from "../components/main"
import NavBar from "../components/navbar"

const App = () => {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/allbooks" element={<AllBooks/>}/>
        <Route path="/allbooks/:id" element={<ShowSelectedBook/>}/>
      </Routes>
    </>
  )
}

export default App
