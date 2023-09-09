import React, {useState} from 'react';
import SearchResult from './SearchResult';

const Search=()=>{
    const [img, setImg]= useState();

    const inputEvent=(event)=>{
        const val= event.target.value;
        setImg(val);
    };
    return(
        <>
           <div>
            <input 
                
                type="text"
                placeholder='Search Here'
                onChange={inputEvent}
                value={img}
            />
                {img===" "? null : <SearchResult blu={img}/>}

           
           </div>
        </>
    );
};

export default Search;