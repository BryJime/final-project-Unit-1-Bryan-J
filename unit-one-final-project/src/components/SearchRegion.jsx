import { motion } from 'framer-motion'



function SearchRegion(props) {


  return (
    <>
      <div className="search-region" >
        <select className="search-dropdown" value={props.value} onChange={props.change}>
          <option default>ALL REGIONS</option>
          <option >UPPER EXTREMITY</option>
          <option >LOWER EXTREMITY</option>
          <option >SPINE</option>
          <option >PELVIS</option>
          <option >CHEST</option>
          <option >ABDOMEN</option>
          <option >HEAD</option>
        </select>
        <motion.button whileHover={{
          scale: .9,
        }} onClick={props.data} className="search-button">Search</motion.button>
      </div>
    </>
  )
}

export default SearchRegion;