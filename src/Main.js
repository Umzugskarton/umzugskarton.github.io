import flyer1 from "./assets/flyer1.png";
import flyer2 from "./assets/flyer2.png";
import flyer3 from "./assets/flyer3.png";
import zoom from "./zoom.png";

function Main({handleFlyer}) {
  return (
    <div className="main">
      <Work handleFlyer={handleFlyer} />
      <About />
      {/* <Skills /> */}
    </div>
  );
}

function Work({handleFlyer}) {
  return (
    <div id="work" className="latest">
      <h2 className="green">LATEST WORK</h2>
      <div className="latest-items">
        <LatestItem handleFlyer={handleFlyer} img={flyer1} />
        <LatestItem handleFlyer={handleFlyer} img={flyer2} />
        <LatestItem handleFlyer={handleFlyer} img={flyer3} />
      </div>
    </div>
  );
}

function LatestItem({handleFlyer, img}) {
  return (
    <div
      className="item"
      onClick={() => handleFlyer(img)}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="zoom-wrapper">
        <img src={zoom} width="122px"/>
      </div>
    </div>
  );
}

function About() {
  return (
    <div id="about" className="about">
      <h2 className="green">About Me</h2>
      <p>
    My Name is Fabian, I am currently working as a Software Developer for the codemanufaktur GmbH in Erlangen, Germany. In addition to my love for Software I am a self taught Designer. From print to digital I would be glad to be deliver designs and solutions that leave a lasting impression on your target audience.
    </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <h2 className="green">Skills</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim
      </p>
      <ProgressBar value="90" max="100" />
    </div>
  );
}

function ProgressBar(params) {
  return (
    <div id="progress-bar-container">
      <div className="progress-bar-child progress"></div>
      <div className="progress-bar-child shrinker timelapse"></div>
    </div>
  );
}
export default Main;
