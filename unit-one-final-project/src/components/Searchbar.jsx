

function Searchbar (props) {


    return (
        <form className="search-feature">
                <input type="text" name="search-bar" value={props.input} placeholder="Search Body Part" className="searchBar"
                    onChange={props.setInput} />
                <button onClick={props.data} className="search-button">Search</button>
            </form>
    ) 
}

export default Searchbar;