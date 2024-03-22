function Header({here, setHere}) {

    const onClickHere = () => setHere(true);
    const onClickGo = () => setHere(false);

    return (
        <>
            <div>
                <h1>Header!</h1>
                <h3>{here? "here":"to go"}</h3>
                <div onClick={onClickHere}>here</div>
                <div onClick={onClickGo}>to go</div>
            </div>
        </>
    );
}

export default Header;