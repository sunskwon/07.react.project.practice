import { useNavigate } from "react-router-dom";

function Footer() {

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate("/help")
    };

    return (
        <>
            <div>
                <h1>Footer!</h1>
                <div onClick={onClickHandler}>
                    <h3>help!</h3>
                </div>
            </div>
        </>
    );
}

export default Footer;