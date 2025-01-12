const form = document.querySelector("form")
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)
    const result = document.querySelector("#results")

    if(height === '' || isNaN(height)) {
        result.innerHTML = "please enter a valid number for height";
    }else if (weight === '' || isNaN(weight)) {
        result.innerHTML = "please enter a valid number for weight";
    } else {
        const bmi = Math.floor(weight / ((height*height) / 10000));
        if(bmi <= 18.6){
            result.innerHTML = `Your BMI is ${bmi} and you are under weight`
        }else if(bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `Your BMI is ${bmi} and you are normal`
        }else if(bmi > 24.9){
            result.innerHTML = `Your BMI is ${bmi} and you are over weight`
        }else{
            result.innerHTML = `you haven't filled the height an weight coloum. <br>Kindly fill the information then press the button`
            
        }
        

    }
})
