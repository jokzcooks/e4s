import {
    Route,
    HashRouter as Router,
    Routes as Switch,
    Navigate,
  } from "react-router-dom";
  import Base from "./containers/Base";
  const Routes = () => {
    return (
      <>
        <Router>
          <Base />
        </Router>
      </>
    );
  };
  
  export default Routes;