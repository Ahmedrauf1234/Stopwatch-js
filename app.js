
// chalta he rahega jab tk qayamat na aajaye

// setInterval(function(){
//     document.write("hello world")
// },1000)

//alag se function me rakhna ho
// function timer(){
//     document.write("Ahmed","<br>")
// }
// setInterval(timer,2000)


// setTimeout(function () {
//     document.write("abcd")
    
// }, 4000);


//agar counting print krwani ho serinterval se

// let num = 0
// setInterval(function(){
//     num++
//     console.log(num);
// },1)



//stop watch wark start
//ye javascript k apne hen 3 varibles jis se machine chalegi
let minutes = 0
let seconds = 0
let miliseconds = 0
let hour = 0
// or jis per chalegi machine index.html me 
let getmin = document.getElementById('min')
let getsec = document.getElementById('sec')
let getmili = document.getElementById('msec')
let gethour = document.getElementById('hour')

let interval;




function start(){
   interval = setInterval(function(){
        miliseconds++
        getmili.innerHTML = miliseconds
        if(miliseconds >=100){
           seconds++
           getsec.innerHTML = seconds
           miliseconds=0
       }
       else if(seconds>=60){
           minutes++
           getmin.innerHTML = minutes
           seconds=0
        }
        else if(minutes>=60){
            hour++
            gethour.innerHTML = hour
            minutes=0
        }
},10)
document.getElementById('dis').disabled = true

}











//buttons work 
function stop(){
    clearInterval(interval)
    document.getElementById("dis").disabled = false
}

function reset(){
    minutes =  0
    miliseconds = 0
    seconds = 0
    getmin.innerHTML = minutes
    getmili.innerHTML = miliseconds
    getsec.innerHTML = seconds


}
















