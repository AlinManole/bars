import { createContext, useState, useEffect, useContext } from "react"
import barsMap from "../bars.json"

const MapContext = createContext({})

const MapContextProvider = props => {
    const [location, setLocation] = useState(null)
    const [bars, setBars] = useState(barsMap)

    const value = {
        location: location,
        bars: bars
    }

    useEffect(() => {
        console.log("Récupération de la localisation...")
    
        navigator.geolocation.getCurrentPosition(
          location => {
            setLocation({
              lat: location.coords.latitude,
              lng: location.coords.longitude
            })
          },
          error => {
            console.log(error)
          }
        )
      }, [])


    console.log("My Location ", location)
   

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