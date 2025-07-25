import { motion } from 'framer-motion'


// Reusable component to display individual exam information
function Exam(props) {

    return <section className="exam-display">
        <h2 className="exam-display-procedure">{`${props.procedure}: `}</h2>
        <br></br>
        <h2 className="exam-display-views">{props.views}</h2>
        <motion.button whileTap={{
            scale: .8,
            backgroundColor: 'rgb(108, 108, 108)'
        }} className="shortcut-button" onClick={props.add} >{props.button}</motion.button>
    </section>
}

export default Exam;