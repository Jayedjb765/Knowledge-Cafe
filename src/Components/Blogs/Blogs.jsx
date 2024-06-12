import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handelbookmarks}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3 ">
           <h4 className="text-5xl"></h4>
            {
                blogs.map(blog => <Blog 
                    key={blog.Id} 
                    blog={blog}
                    handelbookmarks={handelbookmarks}
                    
                    >

                    </Blog>)
            }
        </div>
    );
};

export default Blogs;