const SearchBar = (props) =>{

    function handleChangeInput(e) {
        props.setInput(e.target.value);
      }


    return(
        <div className="input-group rounded">
                <input
                  onChange={handleChangeInput}
                  value={props.input}
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
    );
}

export default SearchBar