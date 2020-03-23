import axios from 'axios'

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/futureX/guilherme/trips"

const setListTrips = trips => ({
    type: 'SET_LIST',
    payload: {
        tripList : trips
    }
})

export const fetchList = () => async (dspatch, getState) => {
    const response = await axios.get(`${baseURL}`)
    dispatchEvent(setListTrips(response.data.trips))
}