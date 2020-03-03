import React from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./app.sass";
import RouterContainer from "containers/RouterContainer";

M.AutoInit();

const App: React.FC = (props: any) => {
  return <RouterContainer />;
};

export default App;
