function OrderedMenus({item}) {

    return (
        <>
            <div>
                <p> name : {item.menuName} </p>
                <p> price : {item.price} / quantity : {item.quantity} </p>
            </div>
        </>
    );
}

export default OrderedMenus;