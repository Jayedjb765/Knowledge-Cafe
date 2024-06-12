import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 text-center ml-4 bg-gray-100">
            <h2>Bokmarkmarked Blogs :{bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.Id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.object
}

export default Bookmarks;