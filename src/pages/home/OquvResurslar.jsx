import React from "react";
import { Link, NavLink } from "react-router-dom";

// images
import kasbiyKurs from "../../assets/icons/kasbiyKurs.svg";
import pullikKurs from "../../assets/icons/pullikKurs.svg";
import img from "../../assets/images/Photo.png";
import Sidebar from "../../components/sidebar/Sidebar";

function OquvResurslar() {
  return (
    <div className="oquvResurslar container">
      <div className="desc">
        <span>Fanlar bo’yicha o’quv resurslari</span>
        <h1>
          Tibbiy ta’limda o‘quv resurslarni yaratish va rivojlantirish markazi{" "}
        </h1>
        <p>
          Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value
          proposition. Organically grow the holistic world view of disruptive
          innovation via workplace diversity and empowerment.
        </p>
        <div className="kurslar">
          <Link>
            <img src={kasbiyKurs} />
            <p>Kasbga yo’naltirilgan kurslar.</p>
          </Link>
          <Link>
            <img src={pullikKurs} />
            <p>
              Pullik kurslar. <br /> Qisqa muddatli kurslar.
            </p>
          </Link>
        </div>
      </div>
      <div className="OquvImg">
        <img src={img} />
      </div>
      <div className="sidebarBlok">
        <Sidebar />
      </div>
    </div>
  );
}

export default OquvResurslar;
