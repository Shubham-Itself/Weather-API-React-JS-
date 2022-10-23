import React from "react";
import Cloud from '@iconscout/react-unicons/icons/uil-cloud'
import Temp from '@iconscout/react-unicons/icons/uil-temperature'
import './Tempapi.css'


function TeamApi(){
    const [data , setData] = React.useState('Delhi')
    const [city ,setCity] = React.useState(null)

    React.useEffect(()=>{
        const fetchApi= async() =>{
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&appid=8942464bf37e738e8504a2796420278d`
            const response = await fetch(URL);
            const resp = await response.json()
            console.log(resp)
            setCity(resp.main)
        }
        fetchApi()
    },[data])

  
    


    return(
        <>
        <div className="square-boxP">
            <h1>Search Weather</h1>
            <div className="square-boxC">
        <input type="text" defaultValue='' onChange={(e)=>{
            setData(e.target.value)
        }}/>

            

            
            <Cloud size="140" color='#00008B' className='Cloud' />
            <div className="main-item">
            <Temp size = '60' color='#00008B'/> <span>{data}</span>

            </div>
            {
                !city?( <p>Data Not Found</p>
                  

                ):( <>
                    <h2>{city.temp}<span>&#176;C</span></h2>
                    <div className="max-min">
                    <span>Min : {city.temp_min}&#176;C | </span><span>Max : {city.temp_max}&#176;C</span>
        
                    </div>
                    </>)
            }
          
            </div>
        </div>
        </>
    )
}
export default TeamApi