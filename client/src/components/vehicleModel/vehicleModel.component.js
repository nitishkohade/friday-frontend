import {useEffect} from 'react'
import CustomSelect from '../select/select.component'
import {useDispatch, useSelector} from 'react-redux'
import "./vehicleModel.style.css"
import { revertModelToInitialState, selectModel, setVehicleModels } from '../../redux/model/model.actions'
import ErrorLabel from '../errorLabel/errorLabel.component'
import SelectSearch from 'react-select-search'

const VehicleModel = () => {
    const dispatch = useDispatch()
    const {models, errorMessage, initialize} = useSelector(state => state.model)
    const {selectedMake} = useSelector(state => state.make)

    useEffect(() => {
        if(selectedMake) {
            dispatch(revertModelToInitialState())
            dispatch(setVehicleModels(selectedMake))
        }
    }, [selectedMake])

    const onSelect = (value) => {
        dispatch(selectModel(value))
    }

    const placeholder = selectedMake ? models ? "Select Model" : "Loading..." : "Select Make first"

    return (
            <div className="vehicle-model">
                <label>Model</label>
                <div className="model-select">
                    {
                        initialize
                        ?
                        <CustomSelect
                            search={true}
                            multiple={false}
                            closeOnSelect={true}
                            options={models}
                            onSelect={onSelect}
                            placeholder={placeholder}
                        />
                        :
                        // workaround to erase the state of the select component
                        <input placeholder={placeholder} className="dummy-model-input" disabled />
                    }
                </div>
                <ErrorLabel 
                    message={"The model list is empty. Please select the other Make."}
                    isVisible={models && models.length === 0 }
                />
            </div>
    )
}

export default VehicleModel
