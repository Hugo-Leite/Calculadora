const input = document.getElementById("input"); // Chama o input

// Criar um array de teclas que podem ser presionadas
const keyPress = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "(",
  ")",
  "+",
  "-",
  "/",
  "*",
];

// Chama o botão "clean" e adiciona a espera de um evento de click que faz o input ficar vazio
const clean = document.getElementById("clean");
clean.addEventListener("click", function () {
  input.value = "";
});

// Chama o botão "backspace" e adiciona a espera do evento "toSwitchOf" que ao clicar apaga o último elemento do input
const backspace = document.getElementById("backspace");
backspace.addEventListener("click", toSwitchOf);

function toSwitchOf() {
  input.value = input.value.slice(0, -1);
}

// Chama os botões "charKey" em cada botão é colocado a espera de um evento de click que faz o valor do dataset ser adicionado no input.
const charKey = document.querySelectorAll(".charKey");
charKey.forEach((btnValue) => {
  btnValue.addEventListener("click", function () {
    input.value += btnValue.dataset.value;
  });
});

// Chama o botão igual e adiciona a espera do evento "calculate" que ao clicar faz o calculo que está dentro do input
const equal = document.getElementById("equal");
equal.addEventListener("click", calculate);

function calculate() {
  const result = eval(input.value);
  input.value = result;
}

input.addEventListener("keypress", function (ev) {
  if (!keyPress.includes(ev.key)) {
    ev.preventDefault();
  }

  if (ev == "backspace") {
    toSwitchOf;
  }

  if (ev.key === "Enter") {
    calculate();
  }

  if (ev.key === "c") {
    input.value = "";
  }
});
