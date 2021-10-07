import React from 'react'

export default function Img(props){
    const { nasaData } = props;
    console.log(nasaData.url)
    return(
      <div className='container'>
      <h2>{nasaData.title}</h2>
      <img src={nasaData.url} alt="sup"></img>
      <p>{nasaData.explanation}</p>
      
    </div>
    )
  }

