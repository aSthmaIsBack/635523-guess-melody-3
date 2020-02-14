import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  // eslint-disable-next-line no-unused-vars,react/prop-types
  const {errorsCount} = props;
  return (
    <WelcomeScreen errorsCount={errorsCount}/>
  );
};

export default App;
