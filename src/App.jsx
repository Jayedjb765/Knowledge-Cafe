
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setbokmarks]= useState([]);

  const handelbookmarks = blog =>{
        const newBookmarks = [...bookmarks,blog];
        setbokmarks(newBookmarks);
  }
  

  return (
    <>
     
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handelbookmarks={handelbookmarks}></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </div>
    
    </>
  )
}

export default App
