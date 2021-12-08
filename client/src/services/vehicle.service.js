import axios from "axios"
import { config } from "../config/service.config";
import { retryFailedService } from "../utils/service.util";

const options = {
    url: `${config.SERVICE_URL}/vehicles`,
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  };

export const getVehicles = (make, model) => {
    retryFailedService(3, 2000)
    const url = `${options.url}?make=${make}&model=${model}`
    return axios({...options, url}).then(res => res).catch(err => err.response)
}