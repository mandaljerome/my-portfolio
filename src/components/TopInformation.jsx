import "./TopInformation.scss";
import img from "../assets/maintenance.svg";

const TopInformation = () => {
  return (
    <div className="top-info">
      <img src={img} alt="" />
      <p>
        Apologies, you've stumbled upon my previous portfolio website. I'm
        currently immersed in crafting an exciting new digital space that truly
        reflects my journey and aspirations.
      </p>
    </div>
  );
};
export default TopInformation;
