function MenuBlock({ item, selectedItems, setSelectedItems, change,setChange }) {

    const onClickHandler = () => {

        const index = selectedItems.findIndex(function(selected){return selected.menuCode === item.menuCode});

        if (index !== -1) {
            // console.log("plus");
            let copiedItems = selectedItems;
            copiedItems[index].quantity += 1;
            setSelectedItems(copiedItems);
            setChange(!change);
            // console.log(selectedItems);
        } else {
            // console.log("add");
            const changedItems = [...selectedItems, 
                {"menuCode": item.menuCode, 
                 "menuName": item.menuName, 
                 "price": item.price,
                 "quantity": 1}];
            setSelectedItems(changedItems);
            setChange(!change);
            // console.log(selectedItems);
        }
    };

    return (
        <>
            <div onClick={onClickHandler}>
                {item.menuName}
            </div>
        </>
    );
}

export default MenuBlock;