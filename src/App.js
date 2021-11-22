import React from 'react';
import { MapContextProvider } from './contexts/Map';


const App = () => {
  return (
    <div>
      <h1>hello</h1>
      <MapContextProvider />
    </div>
  );
};

export default App;