import { useDispatch, useSelector } from "react-redux"
import { setFilters } from "../../redux/vehicle/vehicle.actions"
import CustomSelect from "../select/select.component"
import "./vehicleFilters.style.css"

const VehicleFilters = () => {
    const dispatch = useDispatch()
    const {filters} = useSelector(state => state.vehicle)
    const filterKeys = Object.keys(filters)

    const onSelect = (value, key) => {
        dispatch(setFilters(key, value))
    }

    const renderFilterItems = () => {
        return filterKeys.map(key => 
            <div key={key} className="">
                <div>{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                <div className="filter">
                    <CustomSelect
                        selectType={key}
                        closeOnSelect={false}
                        search={true}
                        multiple={true}
                        placeholder="Select your items"
                        options={filters[key]}
                        onSelect={onSelect}
                    />
                </div>
            </div>
        )
    }

    return (
        
            <fieldset className="vehicle-fieldset">
                <legend>Filters</legend>
                <div className="vehicle-filters">
                {
                    renderFilterItems()
                }
                </div>
            </fieldset>
    )
}

export default VehicleFilters
