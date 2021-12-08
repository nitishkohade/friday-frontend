import {useEffect, useRef} from 'react'
import './modal.style.css'

const Modal = ({closeModal, render}) => {
    
    const ref = useRef(null)

    const modalClickEvent = (event) => {
        if(event.target.className === "backdrop") {
            closeModal()
        }        
    }

    useEffect(() => {
        document.addEventListener("click", modalClickEvent)
        return () => {
            document.removeEventListener("click", modalClickEvent)
        }
    }, [])

    return (
        <div ref={ref} className="modal">
                <div className="content">
                    {render()}
                </div>
                <div className="footer">
                    <button onClick={closeModal}>Close</button>
                </div>
        </div>
    )
}

export default Modal
