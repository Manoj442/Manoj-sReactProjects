import React, {Component} from 'react';
import {FormControl, NativeSelect, Typography} from '@material-ui/core';
import {fetchCountries} from './../API/index';
import styles from './../Countries/Countries.module.css';
//import {axios} from 'axios';
class Country extends Component{  
constructor(){
    super();
    this.state={
        countries:[]
    }
}
 async componentDidMount(){
  const countries= await fetchCountries();
  console.log(countries);
  this.setState({countries})
 }
    render(){
        return(
            <FormControl className={styles.countryDropdown}>
                <Typography variant="h6" component="h2">
                Select a Country:
                </Typography>
                <NativeSelect onChange={(e)=>this.props.changeCountry(e.target.value)}>
                    <option value="">Global</option>
                    {this.state.countries.map((country,index)=>{
                        return <option key={index} value={country}>{country}</option>
                    })}
                </NativeSelect>
            </FormControl>)
}
}
export default Country;