let dataContnt = document.querySelector(".date-date");
let week = ['sun','mon','tues','wednes','thurs','fri','satur'];
setInterval(function(){
    let date = new Date();

let hour = date.getHours();
let min = date.getMinutes();
let second = date.getSeconds();
let ms = date.getMilliseconds();


dataContnt.innerHTML = `
<div class="mb-2 col-11 col-md-6 mx-auto  text-center text-info">
<span class="p-1 ml-2 text-success">${week[date.getDay()]}day</span>
<span class="p-1 ml-1 text-danger">${date.getDate()}</span>/
<span class="p-1 ml-1 text-danger">${date.getMonth() + 1}</span>/
<span class="p-1 ml-1 text-danger">${date.getFullYear()}</span>
</div>  
<div class="date-content row col-10 col-md-7 mx-auto flex-nowrap">
            <div class="hour col p-0">
                <h2 class="  shadow-lg">Hour</h2>
                 <p>${hour < 10  ? '0'+hour: hour }</p>
            </div>

            <div class="min  col p-0">
                <h2 class="shadow-lg">minutes</h2>
                 <p>${min < 10 ? '0'+ min : min }</p>
            </div>
 
            <div class="second col p-0">
                <h2 class="shadow-lg">second</h2>
                 <p>${second < 10 ?'0' + second : second}</p>
            </div>
       </div>

`
},1000);





document.querySelector("form").onsubmit = function(e){
e.preventDefault();

let date2 = new Date();
let day = document.getElementById("day").value;
let month = document.getElementById("month").value;
let year = document.getElementById("year").value;


if(day == "" || month=="" || year ==""){
    document.querySelector(".calc").textContent = "fields are empty"
}else{


    let date3 = new Date(`${month}/${day}/${year}`)
    
    let  time= date3.getTime();
    
    let c = date2 - time
    
    
    let m =  c / (60*60*24*1000) / (365)
    let age = Math.floor(m)
    console.log(age)
    if(isNaN(age)){
        document.querySelector(".calc").textContent = "Enter valid numbers"
    }else{
        document.querySelector(".calc").textContent =  age +" " +" age"
    }


}


document.getElementById("day").value = ""
document.getElementById("month").value =""
document.getElementById("year").value= ""
    
}




let moon = document.querySelector(".moon");
let moonIcon = document.querySelector(".fa-moon");

moon.addEventListener("click",function(){
  
    moonIcon.classList.toggle("text-white")

    if(moonIcon.classList.contains("text-white")){
document.querySelector("body").classList.add("bg-dark")
document.querySelector("body").classList.remove("bg-white")
document.querySelector(".move").textContent="night mode"
    }else{
        document.querySelector("body").classList.add("bg-white")
        document.querySelector("body").classList.remove("bg-dark")
        document.querySelector(".move").textContent="day mode"
    }
})

