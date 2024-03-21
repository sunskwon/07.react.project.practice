import { useEffect } from "react";

import Selected from "../components/Selected";

function SelectedMenus({ selectedItems, setSelectedItems, change, setChange }) {

    let totalPrice = 0;

            {selectedItems.map(
                item => {
                    totalPrice += (item.price * item.quantity);
                }
            )}

    return (
        <>
            <h3>selected menus</h3>
            <div>
                {selectedItems.map(
                    selectedItem =>
                        <Selected
                            item={selectedItem}
                            selectedItems={selectedItems}
                            setSelectedItems={setSelectedItems}
                            change={change}
                            setChange={setChange}
                        />
                )}
            </div>
            <h3>price : {totalPrice}</h3>
        </>
    );
}

export default SelectedMenus;