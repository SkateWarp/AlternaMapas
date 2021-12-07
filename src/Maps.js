import React, { Component } from 'react';
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api';
import Prueba from "./Prueba";


const containerStyle = {
    width: '1200px',
    height: '800px'
};

const center = {
    lat: 18.7009047,
    lng: -70.1654584
};

const position = {
    lat: 37.772,
    lng: -122.214
}

const onLoad = marker => {
    console.log('marker: ', marker)
}


const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15
}

const info = () => {

    return (
    <div>

      <InfoWindow
       // onLoad={onLoad}
        position={position}
    >
        <div style={divStyle}>
            <h1>InfoWindow</h1>
        </div>
    </InfoWindow>


    </div>
    )
}
class Maps extends Component {
    render() {
        return (
            <LoadScript
                googleMapsApiKey="AIzaSyA2pRlvgrXv1MNRJOMRaaHG7LypkZpym4I"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={7}
                >
                    <Marker
                        onClick={info}
                        position={position}
                    />


                    { /* Child components, such as markers, info windows, etc. */ }
                    <></>
                </GoogleMap>
            </LoadScript>
        )
    }
}
export default Maps;
