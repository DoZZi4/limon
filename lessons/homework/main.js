
  // переменная, в которой хранится выбранное математическое действие
    let operation
    let firstNumber 
    let secondnumber

    let plusButton=document.getElementById("plus")
    let minusButton = document.getElementById("minus")
    let timesButton = document.getElementById("times")
    let divideButton = document.getElementById("divide")
    let countButton = document.getElementById("count")

    plusButton.addEventListener("click", function(){
        operation = "+"
        console.log(operation)
    })

    minusButton.addEventListener("click", function(){
        operation = "-"
        console.log(operation)
    })
    countButton.addEventListener("click", function(){
        firstNumber = document.getElementById("num1").value 
        secondnumber = document.getElementById("num2").value
        console.log(firstNumber,secondnumber)
    })

  // функция расчёта
    // function func() {
  	// // переменная для результата
    // var result;
    // // получаем первое и второе число
    // var num1 = Number(document.getElementById("num1").value);
    // var num2 = Number(document.getElementById("num2").value);
    // // смотрим, что было в переменной с действием, и действуем исходя из этого
    // switch (op) {
    // case '+':
    //     result = num1 + num2;
    //     break;
    // case '-':
    //     result = num1 - num2;
    //     break;
    // case '*':
    //     result = num1 * num2;
    //     break;
    // case '/':
    //     result = num1 / num2;
    //     break;
    // }