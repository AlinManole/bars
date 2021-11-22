import React from 'react';
import { MapContextProvider } from './contexts/Map';
import Map from './components/Map';
import Marker from './components/Marker';



const App = () => {
  console.log("help" , MapContextProvider.location)
  return (
    <div>
      <h1>hello</h1>
      <MapContextProvider>
        <Map />
      </MapContextProvider>
    </div>
  );
};

export default App;