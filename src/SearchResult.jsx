import React from 'react';

const SearchResult=(props)=>{
    const de=`https://source.unsplash.com/1000x1000/?${props.blu}`;
    return(
        <>
            <div>
                <img src={de}  alt="random image"/>
            </div>
        </>
    );
};

export default SearchResult;