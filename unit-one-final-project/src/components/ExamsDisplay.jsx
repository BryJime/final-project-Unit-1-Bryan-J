import { useLocation } from "react-router-dom";
import Exam from "./Exam";
import ExamsData from "./ExamData/ExamsData";



function ExamsDisplay() {

    const {state} = useLocation();
    const { storeData,  inputValue} = state;
    
    //Take off
    console.log(inputValue);
    //Take off
    const showSCvalue = storeData.map((data) => {
        return data.shortcut
    })
    //Take off
    console.log(showSCvalue)



   
    return (
        <>
            <h1 className="exam-title-display">{`${inputValue.toUpperCase()} EXAMS: `}</h1>
            <hr className="exams-display -line"></hr>
            <br></br>
            <div>
                {storeData.map((data) => {
                    const addShortcut = () => { if(data.shortcut === false){
                        for(let exam of ExamsData){
                            if(exam.procedure === data.procedure){
                                exam.shortcut = true
                            }
                        }
                        
                        //Take off
                        console.log(data.shortcut)
                       return data.shortcut;
                       
                    }}
                    return <Exam key={data.id} procedure={data.procedure} views={data.views} add={addShortcut} button="+"/>
                })}
            </div>
        </>
    )
}

export default ExamsDisplay;