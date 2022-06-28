import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import App from "../App/App";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Routing = () => {
  return useRoutes([
    { path: "/", element: <Login /> },
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
    { path: "/main", element: <App /> },
  ]);
};

const RoutingWrapper = () => {
  return (
    <Router>
      <Routing />
    </Router>
  );
};

export default RoutingWrapper;
