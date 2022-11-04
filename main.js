let ivar = 0;
let counter = document.getElementById("counter")
let p_logger = document.getElementById("psaves")

function incre1() {
  ivar = ivar + 1;
  counter.textContent = ivar;
  
}
function decre1() {
  ivar = ivar - 1;
  counter.textContent = ivar;
}
function incre2() {
  ivar = ivar + 2;
  counter.textContent = ivar;
}
function decre2() {
  ivar = ivar - 2;
  counter.textContent = ivar;
}
function incre3() {
  ivar = ivar + 3;
  counter.textContent = ivar;
}
function decre3() {
  ivar = ivar - 3;
  counter.textContent = ivar;
}
function saveBtn()
{
  p_logger.textContent += ivar + " - ";
  ivar = 0
  counter.textContent = ivar;
}

