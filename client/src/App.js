import { useDispatch, useSelector } from "react-redux";
import Backdrop from "./components/backdrop/backdrop.component";
import Modal from "./components/modal/modal.component";
import { setErrorNull, setVehicleLoader } from "./redux/vehicle/vehicle.actions";
import VehicleScreen from "./screens/vehicle/vehicle.screen";

function App() {

  const {errorMessage} = useSelector(state => state.vehicle)
  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(setVehicleLoader(false))
    dispatch(setErrorNull())
  }

  return (
    <>
      <VehicleScreen />
      {errorMessage ? <Backdrop>
        <Modal 
          render={() => <><p>{errorMessage}... </p><p> Please Refresh the page!</p></>}
          closeModal={closeModal}
        />
      </Backdrop> : ''}
    </>
  );
}

export default App;
