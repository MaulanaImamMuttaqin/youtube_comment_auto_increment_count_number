let number;
let newNumber;
let interval;
interval = setInterval(() => {
    commentInput = document.querySelector("#contenteditable-root")
    submitButton = document.querySelector("#submit-button")
    if (commentInput) {
        console.log("INPUT IS EXIST")
        startCounter();
        clearInterval(interval);
    }
    else console.log("INPUT STILL NOT EXIST")

}, 5000)


function startCounter() {
    commentInput.addEventListener("focus", () => {
        number = parseInt(localStorage.getItem("number-counter"));
        newNumber = number + 1;
        commentInput.innerText = newNumber;
        console.log(newNumber);
    })

    submitButton.addEventListener("click", () => {
        const currentNumber = parseInt(trim(commentInput.innerText));
        const numberIsNext = currentNumber === newNumber;
        if (!numberIsNext) return;
        console.log(currentNumber);
        localStorage.setItem("number-counter", currentNumber);
    })
}
