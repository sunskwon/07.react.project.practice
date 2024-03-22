import { useNavigate } from "react-router-dom";

function Header({here, setHere}) {

    const navigate = useNavigate();

    const onClickHome = () => navigate("/");
    const onClickHere = () => setHere(true);
    const onClickGo = () => setHere(false);

    return (
        <>
            <div>
                <h1>Header!</h1>
                <div onClick={onClickHome}>
                    <h3>home</h3>
                </div>
                <h5>{here? "here":"to go"}</h5>
                <div onClick={onClickHere}>
                    <h3>here</h3>
                </div>
                <div onClick={onClickGo}>
                    <h3>to go</h3>
                </div>
            </div>
        </>
    );
}

export default Header;