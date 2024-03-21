import { useEffect, useState } from "react";

import { getBurgerMenus } from "../api/MenuAPI";

function Selected({item, selectedItems, setSelectedItems, change, setChange }) {

    // const [burgerMenus, setBurgerMenus] = useState([]);
    
    // useEffect(
    //     () => {
    //         setBurgerMenus(getBurgerMenus());
    //     },
    //     []
    //     );

    const index = selectedItems.findIndex(function(selected){return selected.menuCode === item.menuCode});
    
    // useEffect(
    //     () => {
    //         const productIndex = burgerMenus.findIndex(burger => {return burger.menuCode === item.menuCode});
    //         const string = burgerMenus[productIndex].menuName;
    //         console.log(productIndex);
    //         console.log(string);
    //     },
    //     [selectedItems]
    // )

    const onClickMinusButton = () => {
                
        if (item.quantity === 1) {
            alert("order canceled");
            let copiedItems = selectedItems;
            copiedItems[index].quantity -= 1;
            const removedItems = copiedItems.filter(item => item.quantity !== 0);
            setSelectedItems(removedItems);
        } else {
            // console.log("minus");
            let copiedItems = selectedItems;
            copiedItems[index].quantity -= 1;
            setSelectedItems(copiedItems);
            setChange(!change);
        }
    };
    
    const onClickPlusButton = () => {
        
        // console.log("plus");
        let copiedItems = selectedItems;
        copiedItems[index].quantity += 1;
        setSelectedItems(copiedItems);
        setChange(!change);
    }

    return (
        <>
            <div>
                <p> menu name : {item.menuName} </p>
                <button onClick={onClickMinusButton}>-</button>
                <span>  quantity : {item.quantity} </span>
                <button onClick={onClickPlusButton}>+</button>
            </div>
        </>
    );
}

export default Selected;