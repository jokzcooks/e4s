const DisplayError = () => {

    const goHome = () => {
        window.location.href = "/";
    }
    
    return (
        <div className="mainContainer flex w-screen h-screen main">
            <div className="errorContent">
                <p className="major">Whoops, something went wrong!</p>
                <p className="minor">Our development team has been notified.</p>
                <button className="restartButton" onClick={() => goHome()}>Restart</button>
            </div>
        </div>
    )
}

export default DisplayError