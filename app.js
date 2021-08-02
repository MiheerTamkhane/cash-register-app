const bill = document.getElementById("bill");
const cash = document.getElementById("cash");
const calcButton = document.getElementById("button");
const table = document.getElementById("table");
const output = document.getElementById("output");
const noOfNotes = document.querySelectorAll(".noOfNotes");
const messageDiv = document.getElementById("messageDiv");
const arrOfNotes = [2000, 500, 100, 20, 10, 5, 1];

const cashRegisterHandler = () => {
  let inputBillValue = Number(bill.value);
  let inputCashValue = Number(cash.value);

  if (inputBillValue > 0 && inputCashValue > 0) {
    if (!inputCashValue) {
      alert("enter valid amt");
      return;
    }
    if (inputBillValue > inputCashValue) {
      alert("error bill max");
    }
    calcNotes(inputBillValue, inputCashValue);
  } else {
    alert("enter valid bill");
  }
};

const calcNotes = (billAmt, cashGiven) => {
  let returnAmt = cashGiven - billAmt;
  console.log(returnAmt);
  if (returnAmt < 1) {
    alert("no returns");
  }

  output.style.display = "block";
  for (let i = 0; i < arrOfNotes.length; i++) {
    returnAmt = compare(returnAmt, arrOfNotes[i], i);
  }
};

const compare = (remainder, noteAmt, index) => {
  if (remainder >= noteAmt) {
    let notes = Math.floor(remainder / noteAmt);
    remainder = remainder - notes * noteAmt;
    noOfNotes[index].innerText = `${notes}`;
    console.log(notes);
  }
  return remainder;
};

calcButton.addEventListener("click", cashRegisterHandler);
