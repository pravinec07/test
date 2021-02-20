import yoga from "./images/yoga.png";
import therapy from "./images/therapy.png";
import nutrition from "./images/nutrition.png";
import maditation from "./images/meditation.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="column section-one">
          <div className="heading">
            Explanation of what MH does across these 4 verticals
          </div>
          <div className="subheading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className="column max-width-yoga section-two position-relative">
          <img src={yoga} alt="YOGA" />
          <div className="row justify-space-between position-absolute yoga-know-btn">
            <div className="column heading-one">Yoga</div>
            <div className="more-btn">
              <span className="Know-more">Know more</span>
            </div>
          </div>
        </div>
        <div className="column section-three">
          <div className="row max-width-meditation position-relative">
            <img className="fullwidth" src={maditation} alt="" />
            <div className="row justify-space-between position-absolute meditation-know-btn">
              <div className="column heading-one">Meditation</div>
              <div className="more-btn">
                <span className="Know-more">Know more</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column max-width-nutrition position-relative">
              <img className="fullwidth" src={nutrition} alt="" />
              <div className="position-absolute know-bottom">
                <div className="column heading-one">Nutrition</div>
                <div className="more-btn">
                  <span className="Know-more">Know more</span>
                </div>
              </div>
            </div>
            <div className="column max-width-therapy position-relative">
              <img className="fullwidth" src={therapy} alt="" />
              <div className="position-absolute know-bottom">
                <div className="column heading-one">Therapy</div>
                <div className="more-btn">
                  <span className="Know-more">Know more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
