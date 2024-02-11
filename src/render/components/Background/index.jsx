import { MissingChildren } from "../Images"

const Background = ({onLoad}) => {
    return (
        <div className="backgroundContainer">
            <div className="overlay"></div>
            <img className="scrollingBackground" src={MissingChildren} alt="" onLoad={e => onLoad()}/>
            {/* <div className="scrollingBackground" onLoad={onLoad()}> */}
            {/* </div> */}
        </div>
    )
}

export default Background