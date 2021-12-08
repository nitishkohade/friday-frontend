export const config = (() => {
    if(process.env.NODE_ENV === 'test') {
        return {
            SERVICE_URL: ""
        }
    }

    return {
        SERVICE_URL: "http://localhost:8080/api"
    }
    
})()