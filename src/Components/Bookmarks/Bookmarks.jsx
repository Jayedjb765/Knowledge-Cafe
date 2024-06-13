import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingtime}) => {
    return (
        <div className="md:w-1/3 text-center ml-4 bg-gray-100">
            <div>
                <h3 className="text-4xl">Reading Time {readingtime}</h3>
            </div>
            <h2>Bokmarkmarked Blogs :{bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.Id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.object,
    readingtime : PropTypes.number
}

export default Bookmarks;