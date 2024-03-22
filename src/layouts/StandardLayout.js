import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function StandardLayout({here, setHere}) {

    return (
        <>
            <Header
                here={here}
                setHere={setHere}
            />
            <Outlet/>
            <Footer/>
        </>
    );
}

export default StandardLayout;