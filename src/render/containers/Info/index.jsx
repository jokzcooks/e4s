import { Chevron } from "../../components/Images";

const InfoPage = ({setError}) => {

    document.addEventListener('wheel', function(e) {
        e.preventDefault();
    }, {passive: false})

    return (
        <div className="infoContainer">
            <p className="p1">every 40 seconds,</p>
            <p className="p2">a child goes missing or is abducted in the United States       <span>(Source: https://childfindofamerica.org)</span></p>
            <p className="p3"><span className="bracket-span">[</span>that's 2,000+ children. <span className="under-span">every. day.</span><span className="bracket-span">]</span></p>
            <img className="c1" src={Chevron} alt="" onClick={e => document.querySelector(".c2").scrollIntoView({behavior: "smooth"})}/>
            <p className="p4">it’s <span>our mission</span> to combat this staggering incidence rate by increasing <span>awareness</span> and <span>advocation</span> for at risk children</p>
            <div className="up-down">
                <img className="c2" src={Chevron} alt="" onClick={e => window.scrollTo(0,0)}/>
                <img className="c3" src={Chevron} alt="" onClick={e => document.querySelector(".p4").scrollIntoView({behavior: "smooth"})}/>
            </div>
            <p></p>
            <p></p>
            <p></p>
        </div>
    )
}

export default InfoPage