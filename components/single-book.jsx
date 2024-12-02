import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const ShowSelectedBook = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [selectedBook, setSelectedBook] = useState({})
  useEffect(() => {
    const getSelectedBook = async () => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`)
      const dedsiredBook = await response.json()
      setSelectedBook(dedsiredBook.book)
      console.log(selectedBook)
    }
    getSelectedBook()
  }, [])

  return (
    <>
      <h1>{selectedBook.title}</h1>
      <img 
        src={`${selectedBook.coverimage}}`} 
        alt={`cover image of ${selectedBook.title}`}
        width={300}
        height={550}
      />
      <h2>{selectedBook.author}</h2>
      <p>{selectedBook.description}</p>
      <button onClick={()=>navigate("/allbooks")}>Back To All Books</button>
    </>
  )
}

export default ShowSelectedBook