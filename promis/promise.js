const inputNumber = document.querySelector(".inputNumber");
const result = document.querySelector(".result");
const points = document.querySelector(".points");
const guessButton = document.querySelector(".guess");

guessButton.addEventListener("click", function(){
    // if ( !(inputNumber.value == "") || (inputNumber.value <= 6 && inputNumber.value >= 1 && inputNumber.value != 0 ) ) {
        if (inputNumber.value > 6 || inputNumber.value < 1 ){
            inputNumber.value = "";
            alert("no no !!");
    } else {
        generateRandomNumber();
        let rundomNumber = generateRandomNumber();
        result.innerHTML = rundomNumber;
    
        prom(rundomNumber, inputNumber.value);
    }
    
})


function generateRandomNumber(){
    return (Math.floor(Math.random() * 6 + 1))
}


function prom(rundomNumber, inputNumber){ 

    function compare(rundomNumber){ 
        return new Promise(function(resolve, reject){
            if (inputNumber == rundomNumber){
                resolve(2);
            } else if (Math.abs(inputNumber - rundomNumber) == 1){
                resolve(1);
            } else{
                reject(new Error("oops!"))
            }
        })
    }
    
    compare(rundomNumber).then(function(inputNumber){
        
        points.innerHTML = Number(points.innerHTML) + inputNumber;
    }).catch(function(error){
        points.innerHTML = 0; 
    }).finally(()=>{
        console.log("hi");
    });
}