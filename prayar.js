//https://aladhan.com/prayer-times-api#GetCalendarByCitys
btn =document.getElementById('hijri')
btng =document.getElementById('gregorian')
btnd=document.getElementById("day")
btnt=document.getElementById("timings")
fetch(' https://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2')
  .then((response) => response.json())
  .then((json) =>{ //console.log(json.data[0].timings)
//   {
//     let p=document.createElement('div')
//     p.innerHTML =`<h5>${json.data[0].date.hijri.day}</h5>`
//  }
   
//     let p=document.createElement('div')
//     p.innerHTML = `<h5>${json.data[0].date.gregorian.month.en}</h5> 
//     <h5>${json.data[0].date.gregorian.weekday.en}</h5> 
//     <h5>${json.data[0].date.gregorian.year}</h5>`;
//     document.body.appendChild(p);
//    }


 btng.addEventListener("click",()=>{
alert(`${json.data[0].date.gregorian.date}`)
 })
btn.addEventListener('click',()=>{
alert(`${json.data[0].date.hijri.date}`)
})
btnd.addEventListener('click',()=>{
  alert(` day in gregorian ${json.data[0].date.gregorian.day}
  day in hijri ${json.data[0].date.hijri.day}`)
})

//Fajr  Asr  Dhuhr  Maghrib   Isha 
btnt.addEventListener('click',()=>{
  alert(` Fajr :  ${json.data[0].timings.Fajr}
  Dhuhr :  ${json.data[0].timings.Dhuhr}
  Asr : ${json.data[0].timings.Asr}
  Maghrib : ${json.data[0].timings.Maghrib}
  Isha : ${json.data[0].timings.Isha}`)
})
})