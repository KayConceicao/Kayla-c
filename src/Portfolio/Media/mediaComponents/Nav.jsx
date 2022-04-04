import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return (
        <nav className="media-nav">
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                {`${libraryStatus ? 'Close' : 'Music menu'}`}
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    );
};

export default Nav;