import { Link } from "react-router-dom";


function Header () {


    return (
        <>

            <header className="header">
            
                <h1 className="logo">X-ACT ORDER</h1>
                

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

            </header>

        </>
    )
}

export default Header;