import PrimaryImage from "../images/statistics1.png";
import "./PrimaryLanding.css";
import { Link } from "react-router-dom";

function PrimaryLanding() {
  return (
    <div className="container">
      <div>
        <img
          src={PrimaryImage}
          alt="I man being created by the almighty"
          id="image"
        />
      </div>

      <div>
        <h3 className="content" id="primary-header-three">
          ABOUT US
        </h3>

        <h1 className="content" id="primary-header-one">
          The USA COVID-19 Budget
        </h1>

        <p className="content" id="primary-paragraph">
          How public institutions such as local hospitals and health care
          facilities spend the COVID-19 funds allocated to them can be seen
          here. To view Covid-19 funding for health care facilities based upon
          state or federal, you can seek this information below.
        </p>

        <Link to="/about" id="link">
          <button className="content" id="primary-button">
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PrimaryLanding;
