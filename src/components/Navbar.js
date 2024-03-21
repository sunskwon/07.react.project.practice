import { Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            <h3>nav bar</h3>
            <div><Link to="burgermenu">burger</Link></div>
            <div><Link to="chickenmenu">chicken</Link></div>
        </>
    );
} 

export default Navbar;