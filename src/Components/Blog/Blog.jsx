import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title,cover,author,author_img,reading_time,hashtag,post_date} =  blog;
    return (
        <div>
            <img src={cover} alt={`Cover Picture of the ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 rounded-3xl' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{post_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} read</span>

                </div>
            </div>
            <h2 className="text-4xl">Blogs: {title}</h2>
            <p>
                {
                    hashtag.map((hash,idx) => <span key={idx}><a href=""> #{hash}</a></span>)
                }
            </p>
            
        </div>
    );
};
Blog.propTypes ={
    blog : PropTypes.object.isRequired
}
export default Blog;