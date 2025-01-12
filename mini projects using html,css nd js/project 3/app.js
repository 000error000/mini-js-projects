const clock = document.getElementById('clock')

setInterval(function(){
    let date = new Date()
    clock.innerHTML = ` Time:${date.toLocaleTimeString()}
    <br>date:${date.toLocaleDateString()} 
    <br> year:${date.getFullYear()} `
},1000)