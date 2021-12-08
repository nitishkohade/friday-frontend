import {useState, useEffect} from 'react'
import { selectMake, setVehicleMakes } from '../../redux/make/make.actions'
import {useDispatch, useSelector} from 'react-redux'
import CustomSelect from '../select/select.component'
import "./vehicleMake.style.css"

const VehicleMake = () => {

    const dispatch = useDispatch()
    const {makes, errorMessage} = useSelector(state => state.make)

    useEffect(() => {
        dispatch(setVehicleMakes())
    }, [])

    const onSelect = (value, key) => {
        dispatch(selectMake(value))
    }

    return (
            <div className="vehicle-make">
                <label>Make</label>
                <CustomSelect
                    search={true}
                    multiple={false}
                    closeOnSelect={true}
                    options={makes}
                    onSelect={onSelect}
                    placeholder={makes ? "Select Make" : "Loading..."}
                />
            </div>
    )
}

export default VehicleMake
