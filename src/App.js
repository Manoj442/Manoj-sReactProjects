import React, {Component} from 'react';
//import logo from './logo.svg';
//import styles from './App.css';
import {fetchDate} from './API/index';
import Cards from './Cards/Cards';
import Country from './Countries/Countries';
import Chart from './Charts/Charts';
class App extends Component{
  constructor(){
    super();
    this.state={
      data:{},
      country:''
    }
  }
  async componentDidMount(){
    const data=await fetchDate();
    console.log(data);
    this.setState({data:data});
  }
  handleCountryChange=async(country)=>{
    const data=await fetchDate(country);
    console.log(data);
    this.setState({data:data,
    country:country});
  }
  render(){
    console.log(this.state.data);
    const card= this.state.data.confirmed ? <Cards data={this.state.data}/>:null;
    return(
      <div>{card}<br/>              
      <Country changeCountry={this.handleCountryChange}/> <br/>
      <Chart data={this.state.data} country={this.state.country}/>    
      </div>
      
    )
  }
}

export default App;
