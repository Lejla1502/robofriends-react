import React from 'react';

const SearchBox=({searchChange})=>{
    return(
        <div className="tc pa2">
            <input onChange={searchChange} className="tc pa3 ba b--gren bg-light-blue " 
            type='search' placeholder='search robots'></input>
           
        </div>
    );
}

export default SearchBox;