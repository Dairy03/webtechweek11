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

const makeCircle = () =>{
    result = Math.PI * Math.pow(radius, 2);
    alert(`The area of a circle with radius ${radius} is ${result}`);
}

if(isNaN(radius) == false){
makeCircle()
} else{
    alert("The value entered is not a number.")
}