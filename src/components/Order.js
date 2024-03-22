import { useNavigate } from "react-router-dom";

function Order({ selectedItems }) {
    
    const navigate = useNavigate();
    
    const onClickHander = () => {
    
        (selectedItems.length)? navigate("/order"):alert("shoping list is empty");
    }

    return (
        <>
            <div onClick={onClickHander}>
                <h4>order</h4>
            </div>
        </>
    );
}

export default Order;