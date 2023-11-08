import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import BoshSahifa from "./pages/BoshSahifa";
import Home from "./pages/home/Home";
import UmumiyMalumot from "./pages/umumiyMalumot/UmumiyMalumot";
import FaoliyatgaOidMeyoriyHujjat from "./pages/faoliyatgaOidMeyoriyHujjat/FaoliyatgaOidMeyoriyHujjat";
import SSBbuyrugi from "./pages/SSBbuyrugi/SSBbuyrugi";
import Nizom from "./pages/nizom/Nizom";
import MarkazUstavi from "./pages/markazUstavi/MarkazUstavi";
import Rahbariyat from "./pages/rahbariyat/Rahbariyat";
import Bolimlar from "./pages/bolimlar/Bolimlar";
import TarkibiyTuzilma from "./pages/tarkibiyTuzilma/TarkibiyTuzilma";
import OTMhamkorlik from "./pages/OTMhamkorlik/OTMhamkorlik";
import XalqaroHamkorlik from "./pages/xalqaroHamkorlik/XalqaroHamkorlik";
import MarkazMoliyaviyFaoliyati from "./pages/markazMoliyaviyFaoliyati/MarkazMoliyaviyFaoliyati";

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
        {
          path: "Markaz-ustavi",
          element: <MarkazUstavi />,
        },
        {
          path: "Rahbariyat",
          element: <Rahbariyat />,
        },
        {
          path: "Bo'limlar",
          element: <Bolimlar />,
        },
        {
          path: "Tarkibiy-tuzilma",
          element: <TarkibiyTuzilma />,
        },
        {
          path: "OTM-bilan-hamkorlik",
          element: <OTMhamkorlik />,
        },
        {
          path: "Xalqaro-hamkorlik",
          element: <XalqaroHamkorlik />,
        },
        {
          path: "Markaz-Moliyaviy-Faoliyati",
          element: <MarkazMoliyaviyFaoliyati />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
