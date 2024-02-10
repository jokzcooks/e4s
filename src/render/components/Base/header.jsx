import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="headerContainer">
            <div className="hrzLine">
                <p className="logo" onClick={e => navigate("/")}>E4S</p>
                <p className="search" onClick={e => navigate("/search")}>search</p>
                <p className="help" onClick={e => navigate("/help")} >how to help?</p>
            </div>
        </div>
    )
}

export default Header