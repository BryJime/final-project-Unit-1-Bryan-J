import { useState } from "react";



function SkeletonSelection(props) {

    const [ selected, setSelected ] = useState(null);

    const displayOptions = (choice) => {
        setSelected(choice);
    }


    return (
        <div className="skeleton-selection">
            <div className="skeleton-list">
                <button className="anatomy-button" type="button" onClick={() => displayOptions("HEAD")}> HEAD </button>
                <button className="anatomy-button" type="button" onClick={() => displayOptions("CHEST/ABD/PEL")}> CHEST/ABD/PEL </button>
                <button className="anatomy-button" type="button" onClick={() => displayOptions("UPPER EXTREMITY")}> UPPER EXTREMITY </button>
                <button className="anatomy-button" type="button" onClick={() => displayOptions("SPINE")}> SPINE </button>
                <button className="anatomy-button" type="button" onClick={() => displayOptions("LOWER EXTREMITY")}> LOWER EXTREMITY </button>
            </div>
            <picture className="human-skeleton">
                <img src="../Images/human-skeleton4.png" alt="human skeleton" width="450" height="250" />
            </picture>
            <div>
                { selected === "HEAD" && <div className="skeleton-list">
                    <button className="anatomy-button" type="button" onClick={() => props.click("Skull")}> Skull </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Facial/ENT")}> Facial/ENT </button>
                    </div>
                }
                { selected === "CHEST/ABD/PEL" && <div className="skeleton-list">
                    <button className="anatomy-button" type="button" onClick={() => props.click("Chest")}> Chest </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Ribs/Sternum/SC Joints")}> Ribs/Sternum/SC Joints </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Abdomen")}> Abdomen </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Pelvis/Hips")}> Pelvis/Hips </button>
                    </div>
                }
                { selected === "UPPER EXTREMITY" && <div className="skeleton-list">
                    <button className="anatomy-button" type="button" onClick={() => props.click("Shoulder/Clavicle/Scapula")}> Shoulder/Clavicle/Scapula </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Humerus")}> Humerus </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Elbow/Forearm")}> Elbow/Forearm </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Wrist/Hand/Fingers")}> Wrist/Hand/Fingers </button>
                    </div>
                }
                { selected === "SPINE" && <div className="skeleton-list">
                    <button className="anatomy-button" type="button" onClick={() => props.click("Cervical Spine")}> Cervical Spine </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Thoracic Spine")}> Thoracic Spine </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Lumbar Spine")}> Lumbar Spine </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Sacrum/Other")}> Sacrum/Other </button>
                    </div>
                }
                { selected === "LOWER EXTREMITY" && <div className="skeleton-list">
                    <button className="anatomy-button" type="button" onClick={() => props.click("Femur")}> Femur </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Knee")}> Knee </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("TibFib/Ankle")}> TibFib/Ankle </button>
                    <button className="anatomy-button" type="button" onClick={() => props.click("Foot/Toes")}> Foot/Toes </button>
                    </div>
                }
            </div>
        </div>
    )
}


export default SkeletonSelection;