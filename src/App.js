import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Impressum from "./Impressum";
import { useState, useEffect } from "react";

function App() {
  let [isImpressumModalOpen, setImpressumModal] = useState(false);
  const {height, width} = useWindowDimensions();
  const [mousePos, setMousePos] = useState({x: 0 , y: 0});
  let [bigFlyerPath, setBigFlyerPath] = useState(undefined);
  const handleClick = (open) => {
    setImpressumModal(open);
  };

  const handleFlyer = (path) => {
    console.log("set path ", path);
    setBigFlyerPath(path);
  };

  function clamp(lower, upper, val ) {
    return Math.min(Math.max(upper, val), lower);
  }

  return (
    <div onMouseMove={e => setMousePos({ x: e.pageX , y: e.pageY})}>
      {isImpressumModalOpen && <Impressum onCloseCallback={handleClick} />}
      {bigFlyerPath !== undefined && <BigFlyer handleFlyer={handleFlyer} flyerPath={bigFlyerPath} />}
      <div>
        <Header mousePos={mousePos}/>
        <Main handleFlyer={handleFlyer} />
        <Footer />
        <div className="footnote">
          <div>
            <button onClick={() => setImpressumModal(!isImpressumModalOpen)}>
              Impressum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
          width,
          height
        };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
          function handleResize() {
                  setWindowDimensions(getWindowDimensions());
                }

          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);

    return windowDimensions;
}


function BigFlyer({handleFlyer, flyerPath }) {
  return (
    <div onClick={() => handleFlyer(undefined)} className="big-flyer-background">
      <img src={flyerPath} />
    </div>
  );
}

export default App;
