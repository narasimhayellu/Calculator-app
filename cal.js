const text = document.getElementById("text");


function calDisplay(math){
text.value += math;
}

function calResult(){
    try {
        text.value = eval(text.value);
    } catch (error) {
        text.value = "error";
    }
}

function clearDisplay(){
text.value = "";
}