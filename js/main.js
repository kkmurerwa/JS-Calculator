var display_text = ""
var temp_digit = 0
// TODO: Add array of digits and symbols
var input_array = new Array()

function add(x, y){
    return x+y
}

function subtract(x, y){
    return x-y
}

function multiply(x, y){
    return x*y
}

function divide(x, y){
    return x/y
}

function populateDisplay(result){
    display_text += result
    array_length = input_array.length
    console.log(array_length);
    if(result==="+" || result==="-" || result==="/" || result==="x"){
        input_array.push(result)
        input_array.push("")       
    } else {
        if(array_length!=0){
            incomplete_digit = input_array[array_length-1]
            input_array[array_length-1] = incomplete_digit+result
        } else {
            input_array.push(result)
        }
    }
    display()
}

function clearScreen(){
    input_array = []
    document.getElementById("screen").innerText = "0"
}

function deleteLastDigit(){
    array_length = input_array.length
    last_string = input_array[array_length - 1]
    if(last_string===""){
        input_array.pop()
        console.log(input_array.join())
        display()
    } else {
        input_array[array_length-1] = last_string.slice(0, -1)
        console.log(input_array[array_length-1]);
        display()
    }
}

function operate(operator, x, y){
    var result = 0;
    if (operator==="x"){
        result = multiply(x, y)
    } else if (operator==="/"){
        result = divide(x, y)
    } else if (operator==="+"){
        result = add(x, y)
    } else {
        result = subtract(x, y)
    }
    return result
}

function display(){
    document.getElementById("screen").innerText = input_array.join("")
}

function displayFinalAnswer(){
    var final_answer = parseFloat(input_array.join("")).toFixed(4)
    document.getElementById("screen").innerText = final_answer
}

function processAnswer()
{
    var signs = ['/','x','+','-'];
    signs.forEach((el)=>{
        getAllIndexes(el);
    });
    displayFinalAnswer()
    input_array = []
}

function getAllIndexes(val) {
    var  i = -1;
    while ((i = input_array.indexOf(val, i+1)) != -1){
        // var ans = input_array[i - 1 ] + val + input_array[i + 1];
        var ans = operate(val, input_array[i - 1 ], input_array[i + 1]);
        console.log(input_array[i - 1 ] , val , input_array[i + 1],ans);
        input_array.splice(i-1, 3, ans); 
        
    }
}