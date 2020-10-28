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
        if(array_length!=0){
            last_string = input_array[input_array.length-1]
            if(last_string.match(/^[0-9]+$/)){
                input_array.push(result)
                input_array.push("")
                display()
            }
        } else {
            
        }
    } else {
        if(array_length!=0){
            incomplete_digit = input_array[array_length-1]
            input_array[array_length-1] = incomplete_digit+result
        } else {
            input_array.push(result)
        }

        display()
    }
    
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
    x = parseInt(x)
    y = parseInt(y)
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

function processAnswer(){
    if (input_array.length!=0){
        var signs = ['/','x','+','-'];
        signs.forEach((el)=>{
            getAllIndexes(el);
        });
        displayFinalAnswer()
        input_array = []
    }
}

function getAllIndexes(val){
    var i;
    for(i = 0; i < input_array.length; i++){
        if (input_array[i] === val){
            var ans = operate(val, input_array[i - 1 ], input_array[i + 1]);
            console.log(input_array[i - 1 ] , val , input_array[i + 1], ans);
            input_array.splice(i-1, 3, ans);
            i = i-1
        } 
    }
}