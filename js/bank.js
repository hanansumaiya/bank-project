function getInputValue(inputid) {
  const InputField = document.getElementById(inputid);
  const InputFieldText = InputField.value;
  const InputFieldAmount = parseFloat(InputFieldText);

  InputField.value = "";
  return InputFieldAmount;
}
// =====================================
function updateedTotal(totalId, inputAmount) {
  const depositTotal = document.getElementById(totalId);
  const depositTotalText = depositTotal.innerText;
  const depositTotalAmount = parseFloat(depositTotalText);
  depositTotal.innerText = inputAmount + depositTotalAmount;
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  //   const depositInput = document.getElementById("deposit-input");
  //   const depositInputText = depositInput.value;
  //   const depositInputAmount = parseFloat(depositInputText);
  depositInputAmount = getInputValue("deposit-input");
  ////////////////////
  //   const depositTotal = document.getElementById("deposit-total");
  //   const depositTotalText = depositTotal.innerText;
  //   const depositTotalAmount = parseFloat(depositTotalText);
  //   depositTotal.innerText = depositInputAmount + depositTotalAmount;
  updateedTotal("deposit-total", depositInputAmount);
  ////////////////////

  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const balanceTotalAmount = parseFloat(balanceTotalText);
  ///
  const newBalanceWithDeposit = balanceTotalAmount - depositInputAmount;
  balanceTotal.innerText = newBalanceWithDeposit;
  //////////////////////////////////

  const withdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotalText = withdrawTotal.innerText;
  const withdrawTotalAmount = parseFloat(withdrawTotalText);
  console.log(withdrawTotalAmount);
  ////
  withdrawTotal.innerText = withdrawTotalAmount + depositInputAmount;
  ///////////////

  //
});
//////////////////////////////////////////////==============================////////////////////////////////////////////
//////////////////////////////////////////////==============================////////////////////////////////////////////
document.getElementById("withdraw-btn").addEventListener("click", function () {
  //   const withdrawInput = document.getElementById("withdraw-input");
  //   const withdrawInputText = withdrawInput.value;
  //   const withdrawInputAmount = parseFloat(withdrawInputText);

  withdrawInputAmount = getInputValue("withdraw-input");
  ///////////////////

  //   const withdrawTotal = document.getElementById("withdraw-total");
  //   const withdrawTotalText = withdrawTotal.innerText;
  //   const withdrawTotalAmount = parseFloat(withdrawTotalText);
  //   withdrawTotal.innerText = withdrawTotalAmount + withdrawInputAmount;
  updateedTotal("withdraw-total", withdrawInputAmount);
  ////////////////

  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const balanceTotalAmount = parseFloat(balanceTotalText);
  ///
  const newBalanceWithDeposit = balanceTotalAmount - withdrawInputAmount;
  balanceTotal.innerText = newBalanceWithDeposit;
  ////////
});
