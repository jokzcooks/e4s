import ReactDOM from "react-dom";
import App from "./render/index";
import "./render/index.css";

function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

render();
