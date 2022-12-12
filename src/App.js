import React ,{Component} from 'react';
import './App.css';
import Weather from './component/Weather';
import Formlist from './component/Formlist'



const api_key = "aedbc32ffecd86127f8e57aaf29e9f01";
//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component{

state ={
  tempreature : '',
  city : '',
  country : '',
  humidity : '',
  description : '',
  error : ''
}


getweader = async (e) =>{
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  const api = await fetch(` http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
  const data = await api.json();
 
  if(city && country){
    this.setState({
      tempreature : 'tempreature : '+ data.main.temp,
      city : 'city : '+ data.name,
      country : 'country : '+ data.sys.country,
      humidity : 'cithumidityy : '+ data.main.humidity,
      description : 'description : '+  data.weather[0].description,
      error : ''
      })
  }
  else{
  
  this.setState({
  tempreature : '',
  city : '',
  country : '',
  humidity : '',
  description : '',
  error : ' Error : PLEASE ENTER CITY AND COUNTRY'
    })
}
}

  render(){
  return (
    <div className="App">

      <div className='content'>
                      <h2> Weather Report</h2>
                      <Formlist getweader={this.getweader} />
                      <Weather   tempreature ={this.state.tempreature}
                                 city = {this.state.city}
                                 country =  {this.state.country}
                                 humidity =  {this.state.humidity}
                                 description =  {this.state.description}
                                 error =  {this.state.error}/>
      </div>
    </div>
  );
}
}
export default App;
