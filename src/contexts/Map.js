import { createContext, useState } from "react"
import barsMap from "../bars.json"

const MapContext = createContext({})

const MapContextProvider = props => {
    const [location, setLocation] = useState(null)
    const [bars, setBars] = useState(barsMap)

    const value = {
        location: location,
        bars: bars
    }

    console.log(bars, location)

    return (
        <MapContext.Provider value={value}>
            {props.children}
        </MapContext.Provider>
    );
};

export {
    MapContextProvider,
    MapContext
  }