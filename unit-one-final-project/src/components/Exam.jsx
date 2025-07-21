
function Exam(props) {

    


    return <section className="exam-display">
        <h2 className="exam-display-procedure">{`${props.procedure}: `}</h2>
        <br></br>
        <h2 className="exam-display-views">{props.views}</h2>
        <button className="add-shortcut-button" onClick={props.add}>{props.button}</button>
    </section>
}

export default Exam;