

function Home() {



    return (
        <>
        
            <picture className="home-image">
                <img src="../Images/xray-tumb-up.jpg" alt="X-Ray Hand Thumbs Up" width="800" />
            </picture>
            <form className="search-feature">
                <img src="\Images\searchIcon.png" className="search-icon" />
                <input placeholder="Search Body Part" className="search-bar" />

                <button className="search-button">Search</button>
            </form>
        </>
    )
}

export default Home;