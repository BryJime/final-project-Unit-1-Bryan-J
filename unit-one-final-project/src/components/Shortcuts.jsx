import ExamsData from "./ExamData/ExamsData";
import Exam from "./Exam";
import { useState } from "react";

function Shortcuts() {

    const [ displayExam, setDisplayExam] = useState();

    let shortcutButton;

    return (
        <>
            <div className="shortcuts-title-feature">
                <button className="edit-shortcuts-button">EDIT</button>
                <h2 className="shortcuts-title">SHORTCUTS</h2>
            </div>
            <hr></hr>
            <div>
                {ExamsData.map((data) => {
                    
                    const removeShortcut = () => {
                        for (let exam of ExamsData) {
                            if (exam.procedure === data.procedure) {
                                console.log(exam.procedure)
                                console.log(data.procedure)
                                exam.shortcut = false
                                setDisplayExam(exam.shortcut);
                                console.log(displayExam)
                            }
                        }
                    }

                    if (data.shortcut === true) {
                        shortcutButton = "-";
                        return <Exam key={data.id} procedure={data.procedure} views={data.views} button={shortcutButton} add={removeShortcut} />
                    }
                })}
            </div>
        </>
    )
}

export default Shortcuts;