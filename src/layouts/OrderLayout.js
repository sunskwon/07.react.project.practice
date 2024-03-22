import Header from "../components/Header";
import SelectPayment from "../components/SelectPayment";
import Footer from "../components/Footer";
import OrderMenus from "../components/SelectedMenus";

function OrderLayout({ selectedItems, setSelectedItems, change, setChange}) {

    return (
        <>
            <Header/>
            <OrderMenus
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                change={change}
                setChange={setChange}
            />
            <SelectPayment/>
            <Footer/>
        </>
    );
}

export default OrderLayout;