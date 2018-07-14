import config from './config'
const { apiKey } = config;

const BASE_URL =  'http://ws.audioscrobbler.com/2.0/?method='
const restService = 'json'

function getAll(country){
    const actionName = 'geo.gettopartists'
    const headers = `&country=${country}&${commonHeaders()}`
    const endPoint = `${BASE_URL}${actionName}${headers}`

    return fetch(endPoint)
            .then(res => res.json())
            .then(json => json.topartists.artist)
}

function commonHeaders(){
    return `api_key=${apiKey}&format=${restService}`
}

export default {
    getAll
}
