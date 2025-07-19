import { Link } from "react-router-dom";


function NavBar() {


    return (
        <>
    
            <section className="header">
                <section className="header-logo">
                    <h1 className="logo">X-ACT ORDER</h1>
                </section>

            <section className="navbar">

                <section className="header-home">
                    <Link to="/">
                        HOME
                    </Link>
                </section>
                <section className="header-shortcuts">
                    <Link to="/Shortcuts.jsx">
                        SHORTCUTS
                    </Link>
                </section>
                <section className="header-about">
                    <Link to="/About.jsx">
                        ABOUT
                    </Link>
                </section>

            </section>

            </section>

        </>
    )
}

export default NavBar;