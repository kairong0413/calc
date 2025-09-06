let s = document.getElementById("symbol")
let first = document.getElementById("first")
let second = document.getElementById("second")
let result = document.getElementById("result")

let currenOp = null;
function pluss(){
    s.textContent ='+' ;
    currentOp ="plus";
}

function minuss(){
    s.textContent ='-';
    currentOp ="minus"
}

function timess(){
    s.textContent ='×';
    currentOp = "times"
}

function divv(){
    s.textContent ='÷';
    currentOp = "div"
}

function equall(){
    let a = parseFloat(first.value)
    let b = parseFloat(second.value)
    let x;

    if(currentOp == "plus"){
        x = a+b;
    }else if(currentOp == "minus"){
        x= a-b;
    }else if(currentOp == "times"){
        x=a*b;
    }else if(currentOp == "div"){
        x=a/b;
    }

    result.textContent = x;

}
