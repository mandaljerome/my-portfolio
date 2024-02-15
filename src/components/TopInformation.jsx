import "./TopInformation.scss";
import img from "../assets/maintenance.svg";

const TopInformation = () => {
  return (
    <div className="top-info">
      <img src={img} alt="" />
      <p>
        Sorry, this is my old portfolio website. I'm currently working on my new
        website.
      </p>
    </div>
  );
};
export default TopInformation;
