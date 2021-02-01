import React from 'react'
import './searchbox.css'


function SearchBox({ onInputChange }) {

    return (
        <div className="search-container">
            <input
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="Type Keyword" className="search-input"></input>

        </div>
    )


}

export default SearchBox;