import { useState } from "react";
import ExamsData from "./ExamData/ExamsData";
import { useNavigate } from "react-router-dom";

function Home() {

    const [inputValue, setinputValue] = useState('');
    const [validInput, setvalidInput] = useState(true);
    const navigate = useNavigate();

    let storeData;

    const getData = (e) => {
        e.preventDefault();

        const exam = ExamsData.filter(exam => {
            if (exam.alias.includes(inputValue, 0)) {
                return exam
            }
        })

        storeData = exam;

        // Take off
        console.log(`Input: ${inputValue}`)


        if (!exam.length) {
            setvalidInput(false);
        } else {
            navigate('/ExamsDisplay.jsx', { state: { storeData,  inputValue} })

        }

    }

    return (
        <>

            <picture className="home-image">
                <img src="../Images/xray-tumb-up.jpg" alt="X-Ray Hand Thumbs Up" width="800" />
            </picture>
            <form className="search-feature">
                <img src="\Images\searchIcon.png" className="search-icon" />
                <input type="text" value={inputValue} placeholder="Search Body Part" className="searchBar"
                    onChange={(event) => setinputValue(event.target.value)} />

                <button onClick={getData} className="search-button">Search</button>
            </form>
            <div className="validation-message">
            {validInput ? <p> </p> : <p> CANNOT FIND EXAM. ENTER A VALID BODY PART </p>}
            </div>
        </>
    )
}

export default Home;