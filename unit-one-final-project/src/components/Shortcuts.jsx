import ExamsData from "./ExamData/ExamsData";
import Exam from "./Exam";

function Shortcuts() {


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
                    if (data.shortcut === true) {
                        shortcutButton = "-";
                        return <Exam key={data.id} procedure={data.procedure} views={data.views} button={shortcutButton}/>
                    }
                })}
            </div>
        </>
    )
}

export default Shortcuts;