import DashHeader from "./DashHeader";
import { useLocation } from "react-router-dom";
import './Places.css'

const Places = () => {
  const location = useLocation();
  const {someValue} = location.state || {};

  return (
    <div>
        <DashHeader/><br />
        <center><iframe className="Placess-iframe" src={someValue} title="Place Details" ></iframe></center>
    </div>
  );
};

export default Places;
