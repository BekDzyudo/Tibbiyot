import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import BoshSahifa from "./pages/BoshSahifa";
import Home from "./pages/home/Home";
import UmumiyMalumot from "./pages/umumiyMalumot/UmumiyMalumot";
import FaoliyatgaOidMeyoriyHujjat from "./pages/faoliyatgaOidMeyoriyHujjat/FaoliyatgaOidMeyoriyHujjat";
import SSBbuyrugi from "./pages/SSBbuyrugi/SSBbuyrugi";
import Nizom from "./pages/nizom/Nizom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <BoshSahifa />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "Umumiy-malumot",
          element: <UmumiyMalumot />,
        },
        {
          path: "Faoliyatga-oid-meyoriy-hujjatlar",
          element: <FaoliyatgaOidMeyoriyHujjat />,
        },
        {
          path: "SSB-buyrugi",
          element: <SSBbuyrugi />,
        },
        {
          path: "Nizom",
          element: <Nizom />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
