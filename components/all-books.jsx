import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getAllBooks = async() => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`)
      const bookList = await response.json()
      setAllBooks(bookList.books)
      console.log(allBooks)
    }
    getAllBooks()
  }, [])

  return (
    <>
    <h1>All Books</h1>

    <section id="booklists">
      {allBooks.map((book) => {
        const goSingleBook = () => {navigate(`/allbooks/${book.id}`)}

          return (
            <section key={book.id} onClick={goSingleBook}>
                <img   
                  width={200}
                  height={300}
                  src={book.coverimage}
                  alt={`Cover image of ${book.title}`}
                />
              <h5>{book.title}</h5>
            </section>
          )
      })}
    </section>
    </>
  )
}

export default AllBooks