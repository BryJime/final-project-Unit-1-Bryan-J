import ExamsData from "./ExamData/ExamsData";
import Exam from "./Exam";
import { useState } from "react";


function Shortcuts() {

    const [ examValues, setExamValues] = useState(() => ExamsData.filter(data => data.shortcut));


    let shortcutButton;

    console.log(examValues)


    function removeShortcut (e) {
        
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
                        return <Exam key={data.id} procedure={data.procedure} views={data.views} button={shortcutButton} add={removeShortcut(data.procedure)} />
                    }
                })}
            </div>
        </>
    )
}

export default Shortcuts;