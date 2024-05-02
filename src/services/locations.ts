
export interface StateInt {
    name: string,
    _id: string
}

export const getState = async () => {
    const response = await fetch("/locations/state.json")
    const states = await response.json() as StateInt[]
    return states
}

export interface CityInt {
    name: string,
    _id: string,
    parent: string
}
export const getCities = async (stateId: string) => {
    const response = await fetch("/locations/city.json")
    const cities = await response.json() as CityInt[]
    return cities.filter(item => item.parent === stateId)
}

export interface AreaInt {
    name: string,
    _id: string,
    parent: string
}
export const getAreas = async (cityId: string) => {
    const response = await fetch("/locations/area.json")
    const cities = await response.json() as CityInt[]
    return cities.filter(item => item.parent === cityId)
}