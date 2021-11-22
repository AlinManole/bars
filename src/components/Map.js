import React from 'react';

import { useContext } from 'react';
import { MapContext } from '../contexts/Map';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react'


const Mapped = styled.div`
    height: 100vh;
    width: 100%;`

const Map = () => {

    const { location } = useContext(MapContext)
    return (
        <div>
            {(!location) ?
                <p>Chargement de la page en cours!</p>

                :
                <Mapped>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={location}
                        defaultZoom={14}>

                    </GoogleMapReact>
                </Mapped>

            }

        </div>

    )

}

export default Map