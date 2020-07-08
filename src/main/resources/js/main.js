function Hello() {
    alert("Hello World");
}

function displaySum() {
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
    var firstInt = parseInt(firstNumber);
    var secondInt = parseInt(secondNumber);
    alert(firstInt + secondInt);
}

function changeBackgroundColor() {
    var theBody = document.getElementById("htmlBody");
    theBody.style.backgroundColor = "blue";
    theBody.style.color = "yellow";
}
