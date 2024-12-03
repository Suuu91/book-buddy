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
    }
    getSelectedBook()
  }, [])

  return (
    <section id="singlebook">
      <h1>{selectedBook.title}</h1>
      <h4>{selectedBook.author}</h4>
      <img 
        src={selectedBook.coverimage} 
        alt={`cover Image of ${selectedBook.title}`}
        width={300}
        height={450}
      />
      <p>{selectedBook.description}</p>
      <button onClick={()=>navigate("/allbooks")}>Back To All Books</button>
    </section>
  )
}

export default ShowSelectedBook