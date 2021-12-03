// import React, {useEffect, useState} from "react";
// import PropTypes from 'prop-types';
// import axios from "axios";
// import Select from 'react-select'
//
// // eslint-disable-next-line react-hooks/rules-of-hooks
// const [jsonGuardado, setJsonGuardado] = useState([]);
//
// function Maps(props) {
//
//
//
//     const dataJson = () => {
//
//         axios.get('https://coagisweb.cabq.gov/arcgis/rest/services/public/FilmLocations/MapServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&f=pjson')
//             .then(dataJson => setJsonGuardado(dataJson.data.features));
//
//     }
//
//
//     return (
//         <div>
//             {['Type'].map(key => (
//                 <select key={key}>
//                     {this.state.data.map(({ [key]: value }) => <option key={value}>{value}</option>)}
//                 </select>
//             ))}
//         </div>
//     );
// }
// const Mapas = () => <Select options={jsonGuardado.features.attributes.type} />
// export default Maps;
//
//
//
