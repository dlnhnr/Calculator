const calculatorInput = document.querySelector("#calculatorInput")
const numbersOperators = document.querySelectorAll(".inputElements")

for(el of numbersOperators) {
  el.addEventListener("click", function() {
    calculatorInput.append(this.text)
  })
}

const equals = document.querySelector(".evaluate")
equals.addEventListener("click", function() {
  calculatorInput.innerHTML = eval(calculatorInput.text)
})

const clear = document.querySelector(".clear")
clear.addEventListener("click", function() {
  calculatorInput.innerHTML = ""
})
