import { useNavigate } from "react-router-dom";

function Start({here, setHere}) {

    const navigate = useNavigate();
    
    const onClickHere = () => {
        setHere(true);
        navigate("menu");
    };

    const onClickGo = () => {
        setHere(false);
        navigate("menu");
    };

    return (
        <>
            <div onClick={onClickHere}>
                <h1>here</h1>
            </div>
            <div onClick={onClickGo}>
                <h1>to go</h1>
            </div>
        </>
    );
}

export default Start;