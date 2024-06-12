import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

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

Blogs.propTypes ={
    handelbookmarks : PropTypes.func
}
export default Blogs;