import React, {Component, useEffect, useState} from 'react'
// import Select from 'react-select'
import axios from "axios";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default Prueba;

function Prueba(props) {

    const [jsonGuardado, setJsonGuardado] = useState([]);
    const [valorGu, setValorGu] = useState();
    const [valueData, setValueData] = useState([]);
    const [Geome, setGeome] = useState([]);
    const [jsonRaw, setJsonRaw] = useState([]);

    const dataJson = () => {

        const array = [];
        let arreglado = [];

        axios.get('https://coagisweb.cabq.gov/arcgis/rest/services/public/FilmLocations/MapServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&f=pjson')
            .then(dataJson => {
                setJsonRaw(dataJson.data.features);
                arreglado = dataJson.data.features.filter(function (currentObject) {

                    if (currentObject.attributes.Title in arreglado) {
                        return false;
                    } else {
                        arreglado[currentObject.attributes.Title] = true;
                        return true;
                    }
                });

                const pelis = arreglado.filter((movie) => movie.attributes.Type == "Movie")
                setJsonGuardado(
                    pelis
                )
                console.log(pelis);

            })
        // dataJson.data.features.attributes.Title.filter((dato,index ) => {
        //
        //     arreglado (dataJson.data.features.attributes.Title.indexOf(dato) === index);
        //
        //
        // })

        arreglado.map((data) => {

            // console.log("Type", data.attributes.Type);

            array.push({value: data.attributes.Type, label: data.attributes.Title})

            // setValueData({value: data.attributes.Type, label: data.data.features.Title })
        })

        setValueData(array);

        // setJsonGuardado(dataJson.data.features)
    };


    const geometric = (event) =>{// event.preventDefault()
        const pelis = jsonRaw.filter((movie) => movie.attributes.Title == event.target.value)
        const geometria = pelis.map((data) => data.geometry)
        console.log(geometria);
        console.log(pelis);

    }


// const Generate = valueData =>
//     valueData.map(({value, label}) => (
//         <MenuItem value={label}>{label}</MenuItem>));
// const arreglo = []


useEffect(() => {

    dataJson();

}, []);


//console.log("DATA", valueData);

function handleChange(event) {

    //  console.log("event", event.target.value);
    setValorGu(event.target.value);
}


return (

    <div>

        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={valorGu}
                label="Age"
                onChange={geometric}
            >
                {jsonGuardado.map((data) => (

                    <MenuItem value={data.attributes.Title}>{data.attributes.Title}</MenuItem>

                ))}
                {/*<MenuItem value={10}>Ten</MenuItem>*/}
                {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                {/*<MenuItem value={30}>Thirty</MenuItem>*/}
            </Select>
        </FormControl>

    </div>

);
}



