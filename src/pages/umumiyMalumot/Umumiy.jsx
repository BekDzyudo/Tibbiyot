// images
import umumiyMalumot from "../../assets/images/umumiyM.png";
// components
import Sidebar from "../../components/sidebar/Sidebar";
import OqXalat from "./components/OqXalat";
import SmallContact from "./components/SmallContact";
import { useGetFetch } from "../../hooks/useGetFetch";

function Umumiy() {
  const url = "http://192.168.101.222:8000/common_information";
  const { data, isPending, error } = useGetFetch(url);

  return (
    <div className="umumiy">
      <div className="desc">
        <h1>UMUMIY MA’LUMOT</h1>
        {data && (
          <div dangerouslySetInnerHTML={{ __html: data[0].description }}></div>
        )}
      </div>
      <div className="layout">
        <Sidebar />
        <OqXalat />
        <SmallContact />
      </div>
    </div>
  );
}

export default Umumiy;
