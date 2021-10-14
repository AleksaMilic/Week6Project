const button = document.querySelector("#btn");
const toggle = document.querySelector(".toggle");

const bodyClass = document.body.classList;

let theme = 1,
  margLeft = 3;
button.addEventListener("click", (e) => {
  theme += 1;

  if (theme > 3) {
    theme = 1;
    margLeft = 3;
    bodyClass.remove("theme2", "theme3");
  } else if (theme <= 3) {
    margLeft += 17;
  }

  bodyClass.add("theme" + theme);
  toggle.style.marginLeft = margLeft + "px";
});

let output = document.querySelector(".output");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const others = document.querySelectorAll(".key1");

let ans = "";

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    print(number.innerText);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    operation(operator.innerText);
  });
});

others.forEach((other) => {
  other.addEventListener("click", () => {
    otherFunctions(other.innerText);
  });
});

function otherFunctions(ch) {
  if (ch == "RESET") {
    output.innerText = " ";
    ans = "0";
  } else if (ch == "DEL") {
    ans = ans.substr(0, ans.length - 1);
    output.innerText = ans;
  }
}

function operation(op) {
  let x = eval(ans);

  ans = x;

  if (op == "=") {
    print("");
  } else if (op == "x") {
    ans += "*";
    output.innerText = ans;
  } else {
    print(op);
  }
}

function print(ch) {
  ans += ch;
  output.innerText = ans;
}
