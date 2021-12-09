import React, {useEffect, useState} from 'react'
// import Select from 'react-select'
import axios from "axios";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Maps from "./Maps";


export default Prueba;

function Prueba(props) {

    const [direccion, setDireccion] = useState([]);
    const [jsonGuardado, setJsonGuardado] = useState([]);
    const [valorGu, setValorGu] = useState("");
    const [jsonRaw, setJsonRaw] = useState([]); //Guardar JSON en crudo


    const dataJson = () => {

        let arreglado = []; //Se guarda JSON sin títulos repetidos


        axios.get('https://coagisweb.cabq.gov/arcgis/rest/services/public/FilmLocations/MapServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&f=pjson')
            .then(dataJson => {
                //Obtención del JSON
                setJsonRaw(dataJson.data.features);
                arreglado = dataJson.data.features.filter(function (currentObject) {
                    //Eliminación de nombres repetidos
                    if (currentObject.attributes.Title in arreglado) {
                        return false;
                    } else {
                        arreglado[currentObject.attributes.Title] = true;
                        return true;
                    }
                });
                //Filtrado de películas únicamente
                const pelis = arreglado.filter((movie) => movie.attributes.Type === "Movie")
                setJsonGuardado(
                    pelis //Ojo, PELIS y JsonGuardado tienen mismos datos
                )

            })


    };


    const geometric = (event) => {
        let arre = [];
        // event.preventDefault() //Sino funciona, descomentalo. ¯\_(ツ)_/¯
        const pelis = jsonRaw.filter((movie) => movie.attributes.Title === event.target.value)
        arre = pelis.filter(function (currentObject) {
            if (currentObject.attributes.Address in arre) {
                return false;
            } else {
                arre[currentObject.attributes.Address] = true;
                return true;
            }


        });
        setDireccion(arre);

        setValorGu(event.target.value);

        //   ;
    }

    useEffect(() => {

        dataJson();
    }, []);


    return (

        <div>

            <br/>

            <FormControl fullWidth>
                <InputLabel id="selector">Película</InputLabel>
                <Select
                    labelId="selector"
                    id="simple-selector"
                    value={valorGu}
                    label="Película"
                    onChange={geometric}
                >
                    {jsonGuardado && jsonGuardado.map((data) => (

                        <MenuItem key={data.attributes.OBJECTID}
                                  value={data.attributes.Title}>{data.attributes.Title}</MenuItem>

                    ))}
                </Select>
            </FormControl>

            <Maps datos={direccion}/>


        </div>

    );
}



