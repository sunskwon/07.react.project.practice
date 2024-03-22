import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function Card() {

    const navigate = useNavigate();

    useEffect(
        () => {
            const timer = setInterval(() => {
                navigate("/receipt");
            }, 15000);

            return () => {
                clearInterval(timer);
            }
        },
        []
    );

    return <h1>insert card</h1>
}

export default Card;