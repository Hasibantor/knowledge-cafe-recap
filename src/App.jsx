
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      
      <Header></Header>
     <div className='flex px-6'>
     <Blogs></Blogs>
    <BookMarks></BookMarks>
     </div>
    </>
  )
}

export default App
