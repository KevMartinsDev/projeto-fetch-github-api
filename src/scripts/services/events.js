import { baseUrl} from "../variables.js"

async function getEvent(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events`)
    return await response.json()    
}

export { getEvent }

