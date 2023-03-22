// function greet(x){
//     console.log('Hello ' + x);
// }

// const greet = function (x){
//     console.log('hello '+x);
// }

// -----------------------------------------------------------------------------------------------------------------

// let greet = (x) =>{
//     console.log(`Hello ${x}`);
// }


// not recommended but works
// name => console.log('hello'+x);


//-----------------------------------------------------------------------------------------------------------------

// function greet(name, time = "day"){
//     console.log(`Good ${time}, ${name}.`)
// }


//---------------------------------------------------------------------------------------------------------------

radius = prompt("enter radius");
const radiusPara = document.querySelector("#radius");
const resultPara = document.querySelector("#result")
//moved these ^ up to use in this demo.

const makeCircle = () =>{
    result = Math.PI * Math.pow(radius, 2);
    //alert(`The area of a circle with radius ${radius} is ${result}`);
    radiusPara.textContent += result;
}

if(isNaN(radius) == false){
makeCircle()
} else{
    //alert("The value entered is not a number.")
    resultPara.textContent = "The value entered is not a number."
}


//------------------------------------------------------------------------------------------------
//document stuff

//const radiusPara = document.querySelector("#radius")
console.log(radiusPara)
// const resultPara = document.querySelector("#result")
console.log(resultPara)

