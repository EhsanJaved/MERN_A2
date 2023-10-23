var UserNames = ["ehsan", "shiraz", "zoha"];
var Passwords = ["321", "123", "ehsan"];
var Emails = ["ehsan@gmail.com", "sir@gmail.com", "zoha@gmail.com"];

function login() {
  let InUser = document.getElementById("LoginName").value;
  let InPass = document.getElementById("LoginPassword").value;
  console.log(InPass, InUser);
  const userIndex = UserNames.indexOf(InUser);
  if (userIndex !== -1 && Passwords[userIndex] === InPass) {
    window.location.href = "landingPage.html";
  } else {
    alert("Invalid username or password. Please try again.");
    document.getElementById("LoginName").value = "";
    document.getElementById("LoginPassword").value = "";
  }
}

function signUp() {
  let NewName = document.getElementById("SignUpName").value;
  let NewPass = document.getElementById("SignUpPassword").value;
  let NewEmail = document.getElementById("SignUpEmail").value;
  console.log(NewPass, NewName, NewEmail);
  UserNames.push(NewName);
  Passwords.push(NewPass);
  Emails.push(NewEmail);
  window.location.href = "index.html";
}
