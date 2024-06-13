import PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";

const Blog = ({blog,handelbookmarks,handelreadtime}) => {
    const {title,cover,author,author_img,reading_time,hashtag,post_date} =  blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover Picture of the ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <img className='w-14 rounded-3xl' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{post_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} read</span>
                    <button onClick={()=>handelbookmarks(blog)} className='ml-2 text-2xl text-red-600'><BsBookmarks></BsBookmarks></button>

                </div>
            </div>
            <h2 className="text-4xl">Blogs: {title}</h2>
            <p>
                {
                    hashtag.map((hash,idx) => <span key={idx}><a href=""> #{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handelreadtime(reading_time)} className='text-purple-400 font-bold underline'>Mark as read</button>
            
        </div>
    );
};
Blog.propTypes ={
    blog : PropTypes.object.isRequired,
    handelbookmarks : PropTypes.func,
    handelreadtime : PropTypes.func
}
export default Blog;