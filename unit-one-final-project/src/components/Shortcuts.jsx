import ExamsData from "./ExamData/ExamsData";
import Exam from "./Exam";
import { useState } from "react";

// Finds exams that have been assigned to Shortcut page
function Shortcuts() {

    const [examValues, setExamValues] = useState(() => ExamsData.filter(data => data.shortcut));

    let shortcutButton;

    // Sets exam shortcut to false and updates exam data
    function removeShortcut(id) {
        setExamValues(e => (
            e.map((exam) => exam.id === id ? { ...exam, shortcut: false } : exam)
        ))
    }

    return (
        <>
            <div className="shortcuts-title-feature">
                <h2 className="shortcuts-title">SHORTCUTS</h2>
            </div>
            <hr></hr>
            <div>
                {examValues.map((data) => {
                    if (data.shortcut === true) {
                        shortcutButton = "-";
                        return <Exam key={data.id} procedure={data.procedure} views={data.views} button={shortcutButton} add={() => removeShortcut(data.id)} />
                    }
                })}
            </div>
        </>
    )
}

export default Shortcuts;