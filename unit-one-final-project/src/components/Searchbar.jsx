import { motion } from 'framer-motion'

function Searchbar(props) {


    return (
        <div className="search-feature">
            <input type="text" name="search-bar" value={props.input} placeholder="Search Body Part" className="searchBar"
                onChange={props.setInput} />
            
            <motion.button whileHover={{
                scale: .9,
            }}onClick={props.data} className="search-button">Search</motion.button>
        </div>
    )
}

export default Searchbar;