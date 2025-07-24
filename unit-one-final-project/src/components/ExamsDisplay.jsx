import { useLocation } from "react-router-dom";
import Exam from "./Exam";
import ExamsData from "./ExamData/ExamsData";

function ExamsDisplay() {

    const { state } = useLocation();
    const { storeData, inputValue } = state;

    // Finds data based on search value and displays all exams based on value
    return (
        <>
            <h1 className="exam-title-display">{`${inputValue.toUpperCase()} EXAMS: `}</h1>
            <hr className="exams-display -line"></hr>
            <br></br>
            <div>
                {storeData.map((data) => {
                    const addShortcut = () => {
                        if (data.shortcut === false) {
                            for (let exam of ExamsData) {
                                if (exam.procedure === data.procedure) {
                                    exam.shortcut = true
                                }
                            }
                            return data.shortcut;
                        }
                    }

                    return <Exam key={data.id} procedure={data.procedure} views={data.views} add={addShortcut} button="+" />
                })}
            </div>
        </>
    )
}

export default ExamsDisplay;