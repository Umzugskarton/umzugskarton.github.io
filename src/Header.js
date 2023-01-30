import React, { useCallback, useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import lines from "./lines.svg";
import ghlogo from "./assets/GitHub-Mark-Light-32px.png";
import menu from "./menu.svg";
import LiquidGradientCanvas from "./LiquidGradient";

function Header(props) {
  const [canvasParentSize, setCanvasParentSize] = useState({
    clientHeight: 0,
    clientWidth: 0,
  });
  const [isMenuOpen, setMenuOpen] = useState(false);
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
    <div  className="App">
      <header className="App-header">
        <nav>
          <div id="nav-logo-section" className="nav-section">
            <img src={logo} width="36px" alt="" />
          </div>
          <div
            id="nav-link-section"
            className={isMenuOpen ? "nav-section active" : "nav-section"}
          >
            <img
              id="menu-button"
              onClick={() => setMenuOpen(true)}
              src={menu}
              width="40px"
            />
            <button onClick={() => setMenuOpen(false)} className="header-close">
              X
            </button>
            <a href="#work">WORK</a>
            <a href="#about">ABOUT</a>
            <a href="mailTo:fabian.rieger130@gmail.com">CONTACT</a>
            <a id="header-link-ghlogo" className="red" href="https://github.com/Umzugskarton">
            <img src={ghlogo} width="36px" />
          </a>
          </div>
          <div id="nav-brands-section" className="nav-section">
            <div  ref={onCanvasParentRefChange} className="gradient">
              <LiquidGradientCanvas {...props} dimensions={canvasParentSize} /> 
            </div>
          </div>
          <div id="nav-contact-section" className="nav-section">
            <a className="red" href="https://github.com/Umzugskarton">
              <img src={ghlogo} width="36px" />
            </a>
          </div>
        </nav>
        <div className="shine-border">
          <div className="content">
            <h3>FABIAN RIEGER</h3>
            <h1 className="green">
              DESIGN <span className="purple">&</span>
            </h1>
            <h1 className="red">SOFTWARE</h1>
            <p>
              I strive to deliver eye catching designs, from print, over apps to responsive websites. Always with an focus on the details that define your product. With an expertise in web and software development.
            </p>
            <a href="mailto: fabian.rieger130@gmail.com"><button>CONTACT</button></a>
          </div>
        </div>
      </header>
      <div className="divider-curve">
        <img src={lines} width="100%" />
      </div>
    </div>
  );
}

export default Header;
