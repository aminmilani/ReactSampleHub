import { Outlet, Link, useLocation } from "react-router-dom";
import "./Layout.css"

export default function Layout() {

    const location = useLocation();
    

    const selectedTabStyle = {
        color : '#fff',
        backgroundColor: '#2f3640'
    }

    console.log(location)

    const getTabStyle = (path) => {
        return location.pathname === path ? selectedTabStyle : {}
    }

    return (
        <>

            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">                        
                        <Link to="/">React Sample Hub</Link>
                    </div>

                    <div className="menu">
                        <Link to="/ReactSampleHub1/" style={getTabStyle("/ReactSampleHub1/")}>Home</Link>
                        <Link to="/ReactSampleHub1/Samples" style={getTabStyle("/ReactSampleHub1/Samples")}>Samples</Link>
                        <Link to="/ReactSampleHub1/Contact" style={getTabStyle("/ReactSampleHub1/Contact")}>Contact</Link>
                    </div>
                </div>
            </nav>

            <main className="content">
                <Outlet />
            </main>
        </>
    )
}