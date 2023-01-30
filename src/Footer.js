import React, { useCallback, useState } from "react";
import LiquidGradientCanvas from "./LiquidGradient";
import lines from "./lines.svg";

function Footer() {
  const [canvasParentSize, setCanvasParentSize] = useState({
    clientHeight: 0,
    clientWidth: 0,
  });

  const onCanvasParentRefChange = useCallback((canvasParentRef) => {
    if (canvasParentRef === null) {
      console.log("canvasParent null");
    } else {
      setCanvasParentSize({
        clientHeight: canvasParentRef.clientHeight,
        clientWidth: canvasParentRef.clientWidth,
      });
    }
  }, []);

  return (
    <footer>
      <div className="footer-wrapper">
        {/* <div ref={onCanvasParentRefChange} className="gradient"> */}
          {/* <LiquidGradientCanvas dimensions={canvasParentSize} /> */}
        {/* </div> */}
      <h1>
        LETS <br />
        <span className="purple"> WORK </span>
        <br />
        <span className="red"> TOGETHER</span>
      </h1>
        <div className="footer-contact">
            <p>
               Contact me and together we can strive to deliver your next dream project.
            </p>
            <a href="mailto: fabian.rieger130@gmail.com"><button>CONTACT</button></a>
          </div>
      </div>
      <div className="lines">
        <img src={lines} width="100%" />
      </div>
    </footer>
  );
}

export default Footer;
