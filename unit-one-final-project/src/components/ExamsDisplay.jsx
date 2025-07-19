import { useLocation } from "react-router-dom";



function ExamsDisplay() {

    const {state} = useLocation();
    const { storeData,  inputValue} = state;

    

    console.log(inputValue);

    const examsTitle = storeData.find((data) => {
        return data.anatomy
    })
   

    return (
        <>
            <h1 className="exam-title-display">{`${inputValue.toUpperCase()} EXAMS: `}</h1>
            <hr className="exams-display-line"></hr>
            <br></br>
            <div>
                {storeData.map((data) => {
                    return <section key={data.id} className="exam-display">
                        
                        <h2 className="exam-display-procedure">{`${data.procedure}: `}</h2>
                        <br></br>
                        <h2 className="exam-display-views">{data.views}</h2>
                        <button className="add-shortcut-button">+</button>
                    </section>
                })}
            </div>
        </>
    )
}

export default ExamsDisplay;