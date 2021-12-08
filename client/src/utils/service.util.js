import axios from 'axios';
import axiosRetry from 'axios-retry';

export const retryFailedService = (retries, delay) => {
    axiosRetry(axios, { retries, retryDelay: (retryCount) => {
        return retryCount * delay;
    }})
}
