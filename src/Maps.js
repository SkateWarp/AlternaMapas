import React, {useState} from 'react';
import {GoogleMap, InfoWindow, LoadScript, Marker} from '@react-google-maps/api';


const containerStyle = {
    width: '1200px',
    height: '800px'
};

const center = {
    lat: 35.106766,
    lng: -106.629181
};


const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15
}


function Maps(props) {

    const [posicionActual, setPosicionActual] = useState(null);
    const [datosDir, setDatosDir] = useState(null);
    const [siteData, setSiteData] = useState(null);
    const [shootDate, setShootDate] = useState(null);
    const {datos} = props;
    const [visualizarInfo, setVisualizarInfo] = useState(false);


    const handleOpen = (position, fecha, site, addr) => {

        setPosicionActual(position);
        setShootDate(miliFecha(fecha));
        setDatosDir(addr);
        setSiteData(site);
        setVisualizarInfo(true);
    };


    const handleClose = () => {

        setVisualizarInfo(false);

    };


    const encontrarPos = (x, y) => {

        const posActual = {
            lat: y,
            lng: x
        }

        return posActual;
    }

    const miliFecha = (t) => {
        let fecha = new Date(t)
        fecha = fecha.toISOString().substring(0, 10);
        return fecha;
    }

    return (

        <LoadScript
            googleMapsApiKey="AIzaSyA2pRlvgrXv1MNRJOMRaaHG7LypkZpym4I"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={7}
                onClick={handleClose}
                clickableIcons={false}
            >

                {datos.map((data) => (

                    <Marker key={data.attributes.OBJECTID}

                            position={encontrarPos(data.geometry.x, data.geometry.y)}
                            onClick={() => handleOpen(encontrarPos(data.geometry.x, data.geometry.y), data.attributes.ShootDate, data.attributes.Site, data.attributes.Address)}
                            onLoad={handleClose}

                    />


                ))}


                {visualizarInfo && (

                    <InfoWindow
                        onCloseClick={handleClose}
                        position={posicionActual}
                    >
                        <div style={divStyle}>

                            <h3>
                                Lugar: {siteData}
                                <br/>
                                Dirección: {datosDir}
                                <br/>
                                Fecha de rodaje: {shootDate}
                            </h3>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    )
}
export default Maps;
