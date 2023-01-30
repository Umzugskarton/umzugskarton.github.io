import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Impressum from "./Impressum";
import { useState } from "react";

function App() {
  let [isImpressumModalOpen, setImpressumModal] = useState(false);
  let [bigFlyerPath, setBigFlyerPath] = useState(undefined);
  const handleClick = (open) => {
    setImpressumModal(open);
  };

  const handleFlyer = (path) => {
    console.log("set path ", path);
    setBigFlyerPath(path);
  };

  return (
    <div>
      {isImpressumModalOpen && <Impressum onCloseCallback={handleClick} />}
      {bigFlyerPath !== undefined && <BigFlyer handleFlyer={handleFlyer} flyerPath={bigFlyerPath} />}
      <div>
        <Header />
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

function BigFlyer({handleFlyer, flyerPath }) {
  return (
    <div onClick={() => handleFlyer(undefined)} className="big-flyer-background">
      <img src={flyerPath} />
    </div>
  );
}

export default App;
