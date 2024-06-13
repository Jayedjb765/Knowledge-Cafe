
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setbokmarks]= useState([]);
  const [readingtime, setreadingtime] = useState(0);

  const handelbookmarks = blog =>{
        const newBookmarks = [...bookmarks,blog];
        setbokmarks(newBookmarks);
  }
  const handelreadtime = time =>{
    const newreadingtime = readingtime+time;
    setreadingtime(newreadingtime);

  }
  

  return (
    <>
     
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handelreadtime={handelreadtime} handelbookmarks={handelbookmarks}></Blogs>
    <Bookmarks readingtime={readingtime} bookmarks={bookmarks}></Bookmarks>
    </div>
    
    </>
  )
}

export default App
