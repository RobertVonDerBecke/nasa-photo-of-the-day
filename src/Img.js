import React from 'react'

export default function Img(props){
    const { nasaData } = props;
    console.log(nasaData.url)
    return(
      <div className='container'>
      <h2>Nasa pic of the day</h2>
      <img src={nasaData.url} alt="sup"></img>
      
    </div>
    )
  }

