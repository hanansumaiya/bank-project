document.getElementById("submit-btn").addEventListener("click", function () {
  const inputEmail = document.getElementById("input-email");
  const inputEmailValue = inputEmail.value;
  /////////////////
  const inputPassword = document.getElementById("input-password");
  const inputPasswordValue = inputPassword.value;
  if (
    inputEmailValue == "sumaiya@arif.com" &&
    inputPasswordValue == "sumaiyaarif"
  ) {
    window.location.href = "bank.html";
  }
});
