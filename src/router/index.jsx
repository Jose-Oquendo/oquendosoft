// import { createBrowserRouter } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "../views/App";

// const Router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App/>,
//     },
// ]);

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/oquendosoft/" element={<App />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
