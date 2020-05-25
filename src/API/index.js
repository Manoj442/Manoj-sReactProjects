import axios from 'axios';
const url='https://covid19.mathdro.id/api';

export const fetchDate=async(country)=>{
    let changeableUrl=url;
    if(country){
        changeableUrl=`${url}/countries/${country}`;
    }
    try{
        const {data:{confirmed,deaths,recovered,lastUpdate}}=await axios.get(changeableUrl);
        //console.log(data);
        const modifiedData={
            confirmed,
            deaths,
            recovered,lastUpdate
        }
        console.log(modifiedData)
        return modifiedData;
    }
    catch(error){
        console.log(error);
    }
}

export const fetchCountries=async()=>{
    const countryUrl=`${url}/countries`;
 const {data:{countries}}=await axios.get(countryUrl);
 return countries.map((country)=>country.name);
 //console.log(countries);
}
export const fetchDailyData=async()=>{
    const dailyDataUrl=`${url}/daily`;
 const dailyData=await axios.get(dailyDataUrl);
 console.log(dailyData);
 return dailyData.data.map((d)=>({
     confirmed:d.confirmed.total,
    deaths:d.deaths.total,
    date:d.reportDate}));
}


