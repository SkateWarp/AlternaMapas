import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
// setValueData({value: dataJson.data.features, label: dataJson.data.features })
// <FormControl fullWidth>
// <InputLabel id="demo-simple-select-label">Age</InputLabel>
// <Select
//     labelId="demo-simple-select-label"
//     id="demo-simple-select"
//     value="Seleccione película"
//     label="Age"
//     // onChange={handleChange}
// >
//
//
//     <MenuItem value={valueData.label}>Ten</MenuItem>
//     <MenuItem value={valueData.value}>Twenty</MenuItem>
//     <MenuItem value={30}>Thirty</MenuItem>
// </Select>
// </FormControl>

//import * as actions from '../actions'
import axios from 'axios'
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

class App extends Component {

    componentWillMount(){
        //this.props.getSelectOptions();
        this.state = {
            selected_value: "one",
            tags: [],
            async_test: [],
            options: [
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' }
            ]
        }
    }

    render() {

        const getOptions = (input) => {

        //    axios.defaults.baseURL = 'http://127.0.0.1:8000';
            axios.defaults.headers.common['Accept'] = 'application/json';
            axios.defaults.headers.common['Content-Type'] = 'application/json';

            return axios.get('https://coagisweb.cabq.gov/arcgis/rest/services/public/FilmLocations/MapServer/0/query?where=1%3D1&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=4326&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&f=pjson')
                .then(function (response) {
                    let options = response.data.map( features => ({ value: features.title, label: features.title }));
                    return { options };
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        return (
            <div>
                <div>React simple starter</div>
                <Select
                    name="form-field-name"
                    value={this.state.selected_value}
                    options={this.state.options}
                    onChange={e => this.setState({selected_value: e.value})}
                />
                <Select
                    name="form-field-name"
                    multi={true}
                    value={this.state.tags}
                    options={this.state.options}
                    onChange={e => this.setState({tags: e})}
                />
                <Select.Async
                    name="form-field-name"
                    multi={true}
                    value={this.state.async_test}
                    loadOptions={getOptions}
                    onChange={e => this.setState({async_test: e})}
                />
            </div>
        );
    }
}

function mapStateToProps(state){
    //return { options: state.options.options }
}

export default connect(mapStateToProps)(App);
