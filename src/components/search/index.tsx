import { useEffect, useState } from "react"
import { AreaInt, CityInt, StateInt, getAreas, getCities, getState } from "../../services/locations"

const PropertySearchForm = (props: { propertyType: { name: string, _id: string }[] }) => {

    const { propertyType } = props

    const [states, setStates] = useState<StateInt[]>([])
    const [cities, setCities] = useState<CityInt[]>([])
    const [areas, setAreas] = useState<AreaInt[]>([])

    const [currentPropertyType, setCurrentPropertyType] = useState<string>("default")
    const [currentState, setCurrentState] = useState<string>("default")
    const [currentCity, setCurrentCity] = useState<string>("default")
    const [currentAreas, setCurrentAreas] = useState<string[]>([])

    useEffect(() => {
        (async function getStates() {
            setStates(await getState())
        })()
    }, [])

    function propertyTypeHandler() {
        return propertyType.map(item => {
            return <option
                key={item._id}
                value={item._id}
            >
                {item.name}
            </option>
        })
    }

    function stateHandler() {
        return states.map(item => {
            return <option
                key={item._id}
                value={item._id}
            >
                {item.name}
            </option>
        })
    }

    useEffect(() => {
        (async function getCitiesByStateId() {
            const cities = await getCities(currentState)
            setCities(cities)
        })()
    }, [currentState])

    function cityHandler() {
        return cities.map(item => {
            return <option
                key={item._id}
                value={item._id}
            >
                {item.name}
            </option>
        })
    }

    useEffect(() => {
        (async function getAreasByCityId() {
            const areas = await getAreas(currentCity)
            setAreas(areas)
        })()
    }, [currentAreas])

    function areaHandler() {
        return areas.map(item => {
            return <option
                key={item._id}
                value={item._id}
            >
                {item.name}
            </option>
        })
    }

    return (
        <form className="home-page-search-form">

            <div className="basis-[210px] bg-white px-4 py-2 focus:outline-dashed rounded-sm mb-1">
                <select
                    name="propertyType"
                    id="propertyType"
                    className="bg-transparent w-full outline-none text-[14px]"
                    value={currentPropertyType}
                    onChange={e => setCurrentPropertyType(e.target.value)}
                >
                    <option value={"default"} disabled className="text-gray-300">نوع ملک</option>
                    {states ? propertyTypeHandler() : ""}
                </select>
            </div>

            <div className="basis-[210px] bg-white px-4 py-2 rounded-sm mb-1">
                <select
                    name="state"
                    id="state"
                    className="bg-transparent w-full outline-none text-[14px]"
                    value={currentState}
                    onChange={e => setCurrentState(e.target.value)}
                >
                    <option value={"default"} disabled className="text-gray-300">انتخاب استان</option>
                    {states ? stateHandler() : ""}
                </select>
            </div>

            <div className="basis-[210px] bg-white px-4 py-2 rounded-sm mb-1">
                <select
                    name="city"
                    id="city"
                    className="bg-transparent w-full outline-none text-[14px]"
                    value={currentCity}
                    onChange={e => setCurrentCity(e.target.value)}
                >
                    <option value={"default"} disabled className="text-gray-300">انتخاب شهر</option>
                    {cities ? cityHandler() : ""}
                </select>
            </div>

            <div className="basis-[210px] bg-white px-4 py-2 rounded-sm mb-1">
                <select
                    multiple
                    name="area"
                    id="area"
                    className="bg-transparent w-full h-6 overflow-hidden text-[14px] outline-none"
                    value={currentAreas}
                    onChange={e => setCurrentAreas([e.target.value])}
                >
                    <option value={"default"} disabled className="text-gray-300" >خیابان/ناحیه</option>
                    {areas ? areaHandler() : ""}
                </select>
            </div>

            <div className="basis-[210px] bg-white px-4 py-2 rounded-sm mb-1">
                <input
                    type="number"
                    name="minprice"
                    id="minprice"
                    placeholder="حداقل قیمت"
                    className="w-full outline-none text-[14px]"
                />
            </div>

            <div className="basis-[210px] bg-white px-4 py-2 rounded-sm mb-1">
                <input
                    type="number"
                    name="maxprice"
                    id="maxprice"
                    placeholder="حداکثر قیمت"
                    className="w-full outline-none text-[14px]"
                />
            </div>

            <div className="basis-[210px] bg-white px-4 py-2 rounded-sm mb-1">
                <input
                    type="number"
                    name="minsize"
                    id="minsize"
                    placeholder="حداقل متراژ"
                    className="w-full outline-none text-[14px]"
                />
            </div>

            <div className="basis-[210px] bg-white px-4 py-2 rounded-sm mb-1">
                <input
                    type="number"
                    name="maxsize"
                    id="maxsize"
                    placeholder="حداکثر متراژ"
                    className="w-full outline-none text-[14px]"
                />
            </div>

        </form>
    )
}

export default PropertySearchForm