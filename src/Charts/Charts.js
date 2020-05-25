import React, {Component} from 'react';
import {Line,Pie} from 'react-chartjs-2';
import {fetchDailyData} from './../API/index';
import styles from './../Charts/charts.module.css';
class Chart extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    async componentDidMount(){
     this.setState({data:await fetchDailyData()})
    }
    render(){
        console.log(this.state);
        const pieData=this.props.data;
        const LineChart=this.state.data.length? <Line data={{labels:this.state.data.map(({date})=>date),
    datasets:[{data:this.state.data.map(({confirmed})=>confirmed),
        label:'Infected',
        backgroundColor:'blue',
        fill:true
    },
        {data:this.state.data.map(({deaths})=>deaths),
            label:'Dead',
            backgroundColor:'red',
            fill:true}]
    }}
        />:null;
        const pieChart= this.props.country?<Pie data={{
            labels:['Infected','Deaths','Recovered'],
            datasets:[{label:'People',
        backgroundColor:['blue','red','green'],
        data:[pieData.confirmed.value,pieData.deaths.value,pieData.recovered.value]}]
        }} options={{
            legend:{display:true},
            title:{display:true,text:`Current state in ${this.props.country}`}
        }}/>:null;
        return <div className={styles.chartDimension}>
            {this.props.country? pieChart : LineChart}
            </div>
    }
}
export default Chart;