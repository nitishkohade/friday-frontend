import axios from "axios"
import { config } from "../config/service.config";
import { retryFailedService } from "../utils/service.util";

const options = {
    url: `${config.SERVICE_URL}/makes`,
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  };

export const getVehicleMakes = () => {
  retryFailedService(3, 2000)
  return axios({...options}).then(res => res).catch(err => err.response)
}