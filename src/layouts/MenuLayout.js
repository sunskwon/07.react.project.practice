import Header from "../components/Header";
import SelectedMenus from "../components/SelectedMenus";
import Order from "../components/Order"
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function MenuLayout({ selectedItems, setSelectedItems, change, setChange}) {

    return (
        <>
            <Header/>
            <SelectedMenus
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                change={change}
                setChange={setChange}
            />
            <Order
                selectedItems={selectedItems}
            />
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default MenuLayout;