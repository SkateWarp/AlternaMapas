import React, {useState} from 'react';
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api';
import Prueba from "./Prueba";


const containerStyle = {
    width: '1200px',
    height: '800px'
};

const center = {
    lat: 35.106766,
    lng: -106.629181
};

const position = {
    lat: -106.670,
    lng: 35.095
}

const position2 = {
    lat: 38.772,
    lng: -123.214
}

const onLoad = marker => {
    console.log('marker: ', marker)
}


const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15
}


function Maps(props) {

    const [posicionActual, setPosicionActual] = useState(null);
    const [datosDir, setDatosDir] = useState([]);
    const {datos} = props;

    const [state, setState] = useState(false);


    const handleOpen = (position, dir) => {

        setPosicionActual(position);

        setState(true);
    };


    const handleClose = () => {

        setState(false);

    };


const encontrarPos = (x,y) => {

    const posActual = {


        lat: y,
        lng: x

    }

return posActual;

}

const direccion = (site,addr,shoot) =>
{

    const datos = {
        site: site


    }

}
console.log(datos);
    return (

        <LoadScript
            googleMapsApiKey="AIzaSyA2pRlvgrXv1MNRJOMRaaHG7LypkZpym4I"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={7}
            >
                {datos.map((data) => (

                    <Marker
                        position={encontrarPos(data.geometry.x,data.geometry.y)}
                        onClick={() => handleOpen(encontrarPos(data.geometry.x,data.geometry.y))}
                    />




                ))}


                {state && (

                    <InfoWindow
                        onCloseClick={handleClose}
                        position={posicionActual}
                    >
                        <div style={divStyle}>

                            <h1>
                                {datos.map ((data) =>(

                                data.attributes.Address))}
                            </h1>
                        </div>
                    </InfoWindow>
                ) }

            </GoogleMap>
        </LoadScript>
    )

}

export default Maps;
