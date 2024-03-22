import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import OrderedMenus from "../components/OrderedMenus";

function Receipt({here, setHere, selectedItems, setSelectedItems, waitingNum, setWaitingNum}) {
    
    const copiedItems = selectedItems;
    const sortedItems = copiedItems.sort(function (a, b) {
        let x = a.menuName;
        let y = b.menuName;
        
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });

    let totalPrice = 0;
    selectedItems.map(
        item => {
            totalPrice += (item.price * item.quantity);
        }
    )

    const navigate = useNavigate();
    
    useEffect (
        () => {
            const timer = setInterval(() => {
                navigate("/");
            }, 30000);

            return () => {
                setWaitingNum(waitingNum + 1);
                clearInterval(timer);
                setSelectedItems([]);
            }
        },
        []
    );

    const onClickHandler = () => {
        navigate("/");
    };

    return (
        <>
            <h1>receipt page</h1>
            <div>
                {sortedItems.map(
                    sortedItem =>
                    <OrderedMenus
                        key={sortedItem.menuCode}
                        item={sortedItem}
                    />
                )}
            </div>
            <h3>price : {totalPrice}</h3>
            <h3>here or to go : {here? "here":"to go"}</h3>
            <h3>wait num : {waitingNum} </h3>
            <button onClick={onClickHandler}>home</button>
        </>
    );
}

export default Receipt;