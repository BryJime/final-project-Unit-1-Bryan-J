import { useState } from "react";
import ExamsData from "../ExamData/ExamsData";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import SearchRegion from "./SearchRegion";

function Search() {

    const [inputValue, setinputValue] = useState('');
    const [validInput, setvalidInput] = useState(true);
    const navigate = useNavigate();
    //Assigned data variable to be passed with state via useNavigate
    let storeData;

    //Finds data based on user text input
    const getSearchData = (e) => {
        e.preventDefault();

        const exam = ExamsData.filter(exam => {
            if (exam.alias.includes(inputValue.toLowerCase().trim(), 0)) {
                return exam
            }
        })

        storeData = exam;

        if (!exam.length) {
            setvalidInput(false);
        } else {
            navigate('/ExamsDisplay.jsx', { state: { storeData, inputValue } })
        }
    }

    // Finds data based on dropdown selection
    const getRegionData = (e) => {
        e.preventDefault();

        const exam = ExamsData.filter(exam => {
            if (exam.region.includes(inputValue, 0)) {
                return exam
            }
        })

        storeData = exam;

        navigate('/ExamsDisplay.jsx', { state: { storeData, inputValue } })
        
    }

    return (

        <form>
            <h1 className="search-body-message">Search by Body Part</h1>
            <Searchbar input={inputValue} setInput={(event) => setinputValue(event.target.value)} data={getSearchData} />
            <h1 className="search-region-message">or Region</h1>
            <SearchRegion value={inputValue} data={getRegionData} change={(e) => (setinputValue(e.target.value))} />

            <div className="validation-message">
                {validInput ? <p> </p> : <p> CANNOT FIND EXAM. ENTER A VALID BODY PART </p>}
            </div>
        </form>
    )
}

export default Search;