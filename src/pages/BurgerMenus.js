import { useEffect, useState } from "react";

import { getBurgerMenus } from "../api/MenuAPI";

import MenuBlock from "../components/MenuBlock";

function BurgerMenus({selectedItems, setSelectedItems, change, setChange}
) {

    const [burgerMenuList, setBurgerMenuList] = useState([]);

    useEffect(
        () => {
            setBurgerMenuList(getBurgerMenus());
        },
        []
    )

    return (
        <>
            <h3>menu</h3>
            <div>
                {burgerMenuList.map(
                    product => 
                        <MenuBlock
                            key={product.menuCode}
                            item={product}
                            selectedItems={selectedItems}
                            setSelectedItems={setSelectedItems}
                            change={change}
                            setChange={setChange}
                        />
                    
            )}
            </div>
        </>
    );
}

export default BurgerMenus;