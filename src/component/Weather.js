import React from "react";


const Weather =(props) =>{
const {  tempreature, city, country, humidity, description, error} = props;
        return(
            <div className="result">
                <p>{tempreature}  </p>
                <p>{city} </p>
                <p>{country}</p>
                <p>{humidity}</p>
                <p>{description}</p>
                <p>{error}</p>
            </div>
        )

}

export default Weather