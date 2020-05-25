import React, {Component} from 'react';
import {Grid,Typography,Card,CardContent} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './../Cards/cards.module.css'
//import Typography from '@material-ui/core/Typography';
class Cards extends Component{
  // constructor(props){
  //   super(props);
  //  //console.log(props);
  // }
    render(){
      //console.log(this.props.data);
      const data=this.props.data;
      //const card=({data:{}})
      console.log(this.props.data.confirmed);
      console.log(Object.keys(data))
        return <div>
          <Typography className={styles.titleDisplayer} variant="h3">
        COVID-19 TRACKER
      </Typography><br/>
         <Grid container spacing={4} justify="center"> 
         {Object.keys(data).map((d,index)=>(         
      <Grid key={index} item component={Card} 
      className={d === 'confirmed'? styles.active: 
      d=== 'deaths' ? styles.deaths:
      d === 'recovered'?styles.recovered:
      styles.dontShow}>
        <CardContent>
        <Typography variant="h6">
        {d === 'confirmed' ? 'Confirmed':d ==='deaths' ?'Deaths' : 'Recovered'} :  
        &nbsp;<CountUp start={0} end={data[`${d}`]["value"]} duration = {2.5} separator=","/>
      </Typography>      
      <Typography variant="subtitle1">
        Last update :  &nbsp;{new Date(data.lastUpdate).toDateString()}
      </Typography> 
      <Typography variant="subtitle2">
        {d === 'confirmed' ? "Total No of Active Cases" :d === 'deaths'? "Total No Of Deaths":"Total No Of Recovered"}        
      </Typography>          
        </CardContent>      
      </Grid>))}
  </Grid>           
        </div>
    }
}
export default Cards;