const input = document.querySelector("#calculatorInput")
const numbersOperators = document.querySelectorAll(".inputElements")

for(el of numbersOperators) {
  el.addEventListener("click", function() {
    input.append(this.innerHTML)
  })
}

const equals = document.querySelector(".evaluate")
equals.addEventListener("click", function() {
  input.innerHTML = eval(input.innerHTML)
})

const clear = document.querySelector(".clear")
clear.addEventListener("click", function() {
  input.innerHTML = ""
})
