import React from "react";
import "./pagenation.scss"

function Pagenation(props) {
  const {data} = props;
  return (
    <div className="pagenation container">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
    </div>
  );
}

export default Pagenation;
