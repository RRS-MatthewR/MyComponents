import React, {useState} from 'react';

function SearchBar() {

    const [query, setState] = useState({
        search: '',
        results: {},
        loading: false,
        message: ""
    });

    const handleOnInputChange = (event) => {
        setState({
            ...query,
            search: event.target.value,
            results: {},
            loading: true,
            message: "Searching....."
        })
        console.log(query);
    };    


        return (
            <div className="kbSearchBar">

               <div className="form-title">
                   <h1>Knowledge Base Filter</h1>
                   <hr align="left"/>
               </div> 
                
                <div className="kbSearchBarInput">
                <label className="searchLabel" htmlFor="search-input">
                    <input 
                        type="text"
                        value={query.search}
                        id="search-input"
                        placeholder="Search Knowledge Base..."
                        onChange={handleOnInputChange}
                        name="query"
                    />
                    <i className="fa fa-search"/>
                </label>
                
            </div>
            </div>
        );
}

export default SearchBar