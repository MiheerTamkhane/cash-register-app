const billAmt = document.querySelector("#bill");
const cashAmt = document.querySelector("#cash");
const button = document.querySelector("#button");
const errMsgDiv = document.querySelector("#messageDiv");
const numberOfNotes = document.querySelectorAll(".noOfNotes");
const nextBtn = document.querySelector("#next-btn");
const cashGivenDiv = document.querySelector("#cash-given");
const table = document.querySelector("#table");
const notesArr = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

//Click Event function
nextBtn.addEventListener("click", () => {
  hideErrMsg();
  if (Number(billAmt.value) > 0) {
    cashGivenDiv.style.display = "flex";
    nextBtn.style.display = "none";
  } else {
    errMsgHandler("Please enter valid bill amount");
  }
});
button.addEventListener("click", () => {
  hideErrMsg();

  if (billAmt.value > 0) {
    if (cashAmt.value >= billAmt.value) {
      const returnAmt = cashAmt.value - billAmt.value;
      calculateAmt(returnAmt);
      table.style.display = "block";
      if (returnAmt == 0) {
        errMsgHandler("No return amount to give!");
      }
    } else {
      errMsgHandler("You need to give more money to pay bill.");
    }
  } else {
    errMsgHandler("Please enter valid bill amount!");
  }
});
//hide err msg function
function hideErrMsg() {
  errMsgDiv.style.display = "none";
}
//main calculate amt function
function calculateAmt(returnAmt) {
  for (let i = 0; i < notesArr.length; i++) {
    const notes = Math.trunc(returnAmt / notesArr[i]);
    returnAmt = returnAmt % notesArr[i];
    numberOfNotes[i].innerText = notes;

    if (notes > 0) {
      numberOfNotes[i].style.backgroundColor = "#54E346";
      numberOfNotes[i].style.color = "black";
    }
  }
}

//error msg function
function errMsgHandler(msg) {
  errMsgDiv.style.display = "block";
  errMsgDiv.innerText = msg;
}
