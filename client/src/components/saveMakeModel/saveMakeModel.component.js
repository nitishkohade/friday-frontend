import { useDispatch, useSelector } from "react-redux"
import { revertVehicleToInitialState, setVehicle } from "../../redux/vehicle/vehicle.actions"
import "./saveMakeModel.style.css"

const SaveMakeModel = () => {
    const dispatch = useDispatch()
    const {selectedMake} = useSelector(state => state.make)
    const {selectedModel} = useSelector(state => state.model)

    const onSave = () => {
        if(selectedMake && selectedModel) {
            dispatch(revertVehicleToInitialState())
            dispatch(setVehicle(selectedMake, selectedModel))
        }
    }

    return (
        <button 
            className="save-make-model-button" 
            onClick={onSave} 
            disabled={!selectedModel}
        >
            SAVE
        </button>
    )
}

export default SaveMakeModel
