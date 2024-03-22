import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function AppCard() {

    const navigate = useNavigate();

    useEffect(
        () => {
            const timer = setInterval(() => {
                navigate("/receipt");
            }, 15000);
            
            return () => {
                clearInterval(timer);
            };
        },
        []
    );

    return <h1>scan device/qr</h1>
}

export default AppCard;