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
            <p className="parallax-group1-type p1">every 40 seconds,</p>
            <p className="parallax-group1-type p2">a child goes missing or is abducted in the United States       <span>(Source: https://childfindofamerica.org)</span></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    )
}

export default Header