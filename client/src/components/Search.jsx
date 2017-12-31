import React from 'react';

const Search = (props) => {
return (
 <div>
    <input placeholder='Search...' onChange={props.handleChange}/>
    <button onClick={props.handleButtonClick}>
    <span>Search</span>
    </button>
    </div>
)
}

export default Search



