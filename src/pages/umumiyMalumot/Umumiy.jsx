// components
import Sidebar from "../../components/sidebar/Sidebar";
import OqXalat from "./components/OqXalat";
import SmallContact from "./components/SmallContact";
import { useGetFetch } from "../../hooks/useGetFetch";

function Umumiy() {
  const url = "http://192.168.101.222:8000/common_information";
  const { data, isPending, error } = useGetFetch(url);

  if (data == null) {
    return <p>null</p>;
  }
  return (
    <div className="umumiy">
      <div className="desc">
        <h1>UMUMIY MA’LUMOT</h1>
        <div dangerouslySetInnerHTML={{ __html: data[0].title }}></div>
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
