import { useRef, useState } from "react"
import {useSelector } from "react-redux"
import Backdrop from "../backdrop/backdrop.component"
import Modal from "../modal/modal.component"
import "./vehicleData.style.css" 

const VehicleData = () => {

    const {vehicles, selectedFilters} = useSelector(state => state.vehicle)
    const [modalOpen, setModalOpen] = useState(false)
    const modalData = useRef(null)

    const renderDataOnModal = (vehicle) => <div>
        {Object.keys(vehicle).map(key => {
            return (
                <div key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {vehicle[key]}
                </div>
            )
        })}
    </div>

    const onVehicleModalOpen = (vehicle) => {
        modalData.current = renderDataOnModal(vehicle)
        setModalOpen(true)
    }

    const onVehicleModalClose = () => {
        setModalOpen(false)
    }

    const renderVehicleData = () => {
        let filteredVehicles = ''
        const keys = Object.keys(selectedFilters)

        filteredVehicles = vehicles.filter(vehicle => keys.find(key => selectedFilters[key].includes(vehicle[key])))

        if(!filteredVehicles.length) {
            filteredVehicles = vehicles
        }

        return filteredVehicles.map((vehicle, id) => {
            return (
                <div onClick={() => onVehicleModalOpen(vehicle)} key={id+1} className="vehicle">
                    Vehicle {id+1}
                </div>
            )
        })
    }

    return (
        <>
            <div className="vehicle-data">
                {
                    renderVehicleData()
                }
            </div>
            {
                modalOpen ? 
                <Backdrop>
                    <Modal 
                        render={() => modalData.current} 
                        closeModal={onVehicleModalClose}
                    />
                </Backdrop> : 
                ''
            }
        </>
    )
}

export default VehicleData
