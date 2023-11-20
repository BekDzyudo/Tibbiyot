import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import BoshSahifa from "./pages/BoshSahifa";
import Home from "./pages/home/Home";
import UmumiyMalumot from "./pages/umumiyMalumot/UmumiyMalumot";
import FaoliyatgaOidMeyoriyHujjat from "./pages/faoliyatgaOidMeyoriyHujjat/FaoliyatgaOidMeyoriyHujjat";
import SSBbuyrugi from "./pages/SSBbuyrugi/SSBbuyrugi";
import Rahbariyat from "./pages/rahbariyat/Rahbariyat";
import Bolimlar from "./pages/bolimlar/Bolimlar";
import TarkibiyTuzilma from "./pages/tarkibiyTuzilma/TarkibiyTuzilma";
import OTMhamkorlik from "./pages/OTMhamkorlik/OTMhamkorlik";
import XalqaroHamkorlik from "./pages/xalqaroHamkorlik/XalqaroHamkorlik";
import YangiAdabiyotlar from "./pages/yangiAdabiyotlar/YangiAdabiyotlar";
import NotFound from "./pages/notFound/NotFound";
import JamoatchilikSalomatlikiHamkorlik from "./pages/jamoatSalomatligiHamkorlik/JamoatchilikSalomatlikiHamkorlik";
import KasbiyIlmiyMalakaOshirishHamkorlik from "./pages/kasbiyIlmiyMalakaOshirishHamkorlik/KasbiyIlmiyMalakaOshirishHamkorlik";
import YaratiladiganAdabiyotlar from "./pages/yaratiladiganAdabiyotlar/YaratiladiganAdabiyotlar";
import OquvResurslarigaQoyilganTalablar from "./pages/oquvResurslarigaQoyilganTalablar/OquvResurslarigaQoyilganTalablar";
import FanlarBoyichaOquvResurslariAll from "./pages/fanlarBoyichaOquvResurslariAll/fanlarBoyichaOquvResurslariAll";

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
          path: "Yaratiladigan-Adabiyotlar",
          element: <YaratiladiganAdabiyotlar />,
        },
        {
          path: "Oquv-resurslariga-qoyilgan-talablar",
          element: <OquvResurslarigaQoyilganTalablar />,
        },
        {
          path: "Rahbariyat-va-hodimlar",
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
          path: "Jamoat-salomatligi-texnikumlari-bilan-hamkorlik",
          element: <JamoatchilikSalomatlikiHamkorlik />,
        },
        {
          path: "Kasbiy-malaka-oshirish-va-Ilmiy-amaliy-markazlar-bilan-hamkorlik",
          element: <KasbiyIlmiyMalakaOshirishHamkorlik />,
        },
        {
          path: "Yangi-adabiyotlar",
          element: <YangiAdabiyotlar />,
        },
        {
          path: "Fanlar-boyicha-oquv-resurslari",
          element: <FanlarBoyichaOquvResurslariAll />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
