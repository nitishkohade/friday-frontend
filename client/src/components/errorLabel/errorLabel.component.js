import "./errorLabel.style.css"

function ErrorLabel({message, isVisible}) {
    return (
        <>
            {
                isVisible
                ?
                <div className="error-label">
                    {message}
                </div>
                :
                ''
            }
        </>
    )
}

export default ErrorLabel
