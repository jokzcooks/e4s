import React, { useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import RouterPaths from "../../utils/routes.json";
import { ErrorMessage } from "../../components/Notify";
import InfoPage from './../Info/index';
import SearchPage from './../Search/index';
import HelpPage from './../Help/index';
import Header from "../../components/Base/header";
import Background from "../../components/Background";

const Base = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  let setError = null;
  const onErrorMount = (data) => setError = data[1];
  const [loaded, setLoaded] = useState(false);
  console.log(loaded)

  return (
    <>
      <div className="mainContainer flex w-screen h-screen main">
        <Background onLoad={() => {setLoaded(true);console.log("LOADED")}}/>

        {
          location.pathname == "/" ?
            loaded ?
              <Header/>
            :
            ""
          : 
          <Header/>
        }
        <Routes>

          {location.pathname == "/" && loaded ? 
          <Route exact path={RouterPaths.INFO} element={<InfoPage setError={(data) => setError && setError(data)}/>} /> : ""}

          <Route exact path={RouterPaths.SEARCH} element={<SearchPage setError={(data) => setError && setError(data)}/>} />
          
          <Route exact path={RouterPaths.HELP} element= {<HelpPage setError={(data) => setError && setError(data)}/>} />
        </Routes>
        <ErrorMessage onMount={onErrorMount}/>
      </div>
    </>
  );
};

export default Base;