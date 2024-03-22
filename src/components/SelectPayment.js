import { useState } from "react";

import { useNavigate } from "react-router-dom";

function SelectPayment() {
    
    const [checked, setChecked] = useState("card");
    
    const navigate = useNavigate();

    const onClickRadio = e => {
        // console.log(e.target.value);
        setChecked(e.target.value);
    };

    const onClickHandler = () => {

        (checked === "card")? navigate("/pay/card"):navigate("/pay/appcard")
        setChecked("card");
    };
    
    const onClickCancel = () => navigate("/menu");

    return (
        <>
            <div>
                <label htmlFor="card"><h3>card</h3></label>
                <input 
                    id="card"
                    name="cardOrApp" 
                    type="radio"
                    value="card"
                    defaultChecked
                    onClick={onClickRadio}
                />
            </div>
            <div>
                <label htmlFor="app"><h3>appcard / QR</h3></label>
                <input 
                    id="app"
                    name="cardOrApp" 
                    type="radio"
                    value="app"
                    onClick={onClickRadio}
                    />
            </div>
            <div onClick={onClickHandler}>
                <h4>pay</h4>
            </div>
            <div onClick={onClickCancel}>
                <h4>cancel</h4>
            </div>
        </>
    );
}

export default SelectPayment;