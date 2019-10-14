import React from 'react';
import './App.css';
import Weather from './component/weather';
import Form from './component/form'
import Titles from './component/title'




class App extends React.Component{

  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }

  getWeather = async (e) => {
    
    e.preventDefault();
    const Api_Key = '48248c42f5f61b3328c3c332fcc2b50d';
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    

    const response = await api_call.json();
    if(city&&country){
    this.setState({
      temperature:response.main.temp-273.15,
      city:response.name,
      country:response.sys.country,
      humidity:response.main.humidity,
      description:response.weather[0].description,
      error:""
    });
    }else{
      this.setState({
        error:"Enter valid values"
      })
    }
    console.log(response);
    
  }


  render(){
    return (
    <div className="appbody">
      <Titles />
      <Form loadWeather={this.getWeather} />
      <Weather 
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}
      />
    </div>
  );
  }
}


export default App;
