const key='56f59d26f82af4ee81cbc6068dc9100d'
btn=document.getElementById("Ri")
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=${key}`)
.then((response) => response.json())
  .then((json) => 
  {
    console.log(json)
    btn.addEventListener('click',()=>{
        alert(` ${json.name}
       lat : ${json.coord.lat}
       lon : ${json.coord.lon}
      deg :  ${json.wind.deg}
      humidity: ${json.main.humidity}`)
    })
  })