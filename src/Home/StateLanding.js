import "./StateLanding.css";
import { Link } from "react-router-dom";

function StateLanding({ headerThree, headerOne, paragraph, button, image }) {
   
  function fundingLinkCheck() {
    if (button === "State Data") {
      return (
        <Link to="/state">
          <button className="state-content" id="state-button">
            {button}
          </button>
        </Link>
      );
    } else if (button === "Federal Data") {
      return (
        <Link to="/federal">
          <button className="state-content" id="state-button">
            {button}
          </button>
        </Link>
      );
    }
  }

  return (
    <div className="state-container">
      <div>
        <img
          src={image}
          alt="video regarding covid for the first section of the page.
                The second half has two pictures. One relating to different states and the second relating to federal or nationwide."
          className="image"
        />
      </div>

      <div>
        <h3 className="state-content" id="state-header-three">
          {headerThree}
        </h3>

        <h1 className="state-content" id="state-header-one">
          {headerOne}
        </h1>

        <p className="state-content" id="state-paragraph">
          {paragraph}
        </p>

        {fundingLinkCheck()}
      </div>
    </div>
  );
}

export default StateLanding;
