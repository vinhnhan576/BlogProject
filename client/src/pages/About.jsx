import React from "react";
import Helmet from "../components/Helmet";
import Hello from "../assets/image/About/xinchao.png";

function About() {
  return (
    <Helmet title="Tớ là?">
      <div className="whole">
        <div className="whole__whole1">
          <img src={Hello} alt="" />
          <div className="whole__whole1__outline whole__outline"></div>
        </div>
        <div className="whole__whole2">
          <div className="whole__whole2__greeting">
            Hi guys, im huong les kakaka
            <br /> Ăn cứt không Nhân ơi
            <br /> Ăn cứt không Nhân ơi
            <br /> Ăn cứt không Nhân ơi
            <br /> Ăn cứt không Nhân ơi
            <br /> Ăn cứt không Nhân ơi
            <br /> Ăn cứt không Nhân ơi
          </div>
          <div className="whole__whole2__outline whole__outline"></div>
        </div>
      </div>
    </Helmet>
  );
}

export default About;
