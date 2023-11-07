import React from "react";

// scss
import "./home.scss";
import OquvResurslar from "./OquvResurslar";
import KasbMaqsadVazifa from "./KasbMaqsadVazifa";
import KursAmalgaOshish from "./KursAmalgaOshish";
import VideoDarslik from "./VideoDarslik";
import MeyoriyHujjatlar from "./MeyoriyHujjatlar";

function Home() {
  return (
    <div className="home">
      <OquvResurslar />
      <KasbMaqsadVazifa />
      <KursAmalgaOshish />
      <VideoDarslik />
      <MeyoriyHujjatlar />
    </div>
  );
}

export default Home;
