import { useLocation } from "react-router-dom";
import FunctionalityNavbar from "../../Medium/navbar/functionalitynavbar";
import { ReactComponent as Houselogo } from "../../../assets/house.svg";
import { ReactComponent as TrainingLogo } from "../../../assets/training.svg";
import { ReactComponent as NoteLogo } from "../../../assets/note.svg";

import './smallTrainingDetails.css'
const SmallTrainigDetails = () => {
    const location = useLocation();
    const data = location.state?.data;
    console.log('dane' + data.day)


    if (!data) {
        return <div>No exercise data available.</div>;
    }
    return (
        <div className="small-training-background" >
            <FunctionalityNavbar />
            <div className="small-training-details-container" >
                <h2><TrainingLogo /> {data.training.description} /{data.training.treiningType} </h2>

                <h2><Houselogo /> {data.trainingEvent.localozation}</h2>
                <h2 ><NoteLogo /> {data.trainingEvent.description}</h2>
            </div>
        </div>
    )

}
export default SmallTrainigDetails