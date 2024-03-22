import { useNavigate } from "react-router-dom";

function Selected({item, selectedItems, setSelectedItems, change, setChange }) {

    const index = selectedItems.findIndex(function(selected){return selected.menuCode === item.menuCode});

    const navigate = useNavigate();

    const onClickMinusButton = () => {
                
        if (item.quantity === 1) {
            alert("order canceled");
            let copiedItems = selectedItems;
            copiedItems[index].quantity -= 1;
            const removedItems = copiedItems.filter(item => item.quantity !== 0);
            setSelectedItems(removedItems);
            navigate("/");
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