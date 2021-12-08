import SaveMakeModel from "../../components/saveMakeModel/saveMakeModel.component"
import Vehicle from "../../components/vehicle/vehicle.component"
import VehicleMake from "../../components/vehicleMake/vehicleMake.component"
import VehicleModel from "../../components/vehicleModel/vehicleModel.component"
import "./vehicle.style.css"

const VehicleScreen = () => {
    return (
        <div className="vehicle-screen">
            <div className="make-model">
                <VehicleMake />
                <VehicleModel />
            </div>
            <div className="save-make-model">
                <SaveMakeModel />
            </div>
            <Vehicle />
        </div>
    )
}

export default VehicleScreen
