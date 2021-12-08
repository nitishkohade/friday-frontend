import { useSelector } from "react-redux"
import Backdrop from "../backdrop/backdrop.component"
import Spinner from "../spinner/spinner.component"
import VehicleData from "../vehicleData/vehicleData.component"
import VehicleFilters from "../vehicleFilters/vehicleFilters.component"
import "./vehicle.style.css"

const Vehicle = () => {
    const {vehicles, loadingVehicle} = useSelector(state => state.vehicle)
    return (
        <>         
            {
                vehicles?.length
                ?
                <div className="vehicle">
                    <VehicleFilters />
                    <VehicleData />
                </div>
                :
                <>
                    {
                        vehicles?.length === 0
                        ?
                        <div className="empty-vehicle-list">
                            The Vehicle list is empty for the above model. Please select a different Model or Make.
                        </div>
                        :
                        ""
                    }
                </>
            }
            {
                loadingVehicle && <Backdrop>
                            <Spinner></Spinner>
                        </Backdrop>
            }
        </>
    )
}

export default Vehicle
