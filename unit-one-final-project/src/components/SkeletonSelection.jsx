


function SkeletonSelection() {
    
    return (
        <div className="skeleton-selection">
            <div className="skeleton-list">
                <button className="anatomy-button"> HEAD </button>
                <button className="anatomy-button"> CHEST/ABD/PEL </button>
                <button className="anatomy-button"> UPPER EXTREMITY </button>
                <button className="anatomy-button"> SPINE </button>
                <button className="anatomy-button"> LOWER EXTREMITY </button>
            </div>
            <picture className="human-skeleton">
                <img src="../Images/human-skeleton4.png" alt="human skeleton" width="450" height="250" />
            </picture>
        </div>
    )
}


export default SkeletonSelection;