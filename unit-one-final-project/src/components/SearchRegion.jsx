  function SearchRegion (props) {


    return (
        <>
        <select className="search-dropdown" value={props.value} onChange={props.change}>
                <option default>Search by Region</option>
                <option >UPPER EXTREMITY</option>
                <option >LOWER EXTREMITY</option>
                <option >SPINE</option>
                <option >PELVIS</option>
                <option >CHEST</option>
                <option >ABDOMEN</option>
                <option >HEAD</option>
            </select>
        <button onClick={props.data} className="search-button">Search</button>
        </>
    )
  }

  export default SearchRegion;