const form = document.getElementById("user-input");

function signupHandler(event) {
  event.preventDefault();

  const userNameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const enteredUsername = userNameInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredUsername.trim().length === 0) {
    alert("Invalid input - username must not be empty");
    return;
  }

  if (enteredUsername.trim().length <= 5) {
    alert("Invalid input - password must be six characters or longer");
    return;
  }

  const user = {
    userName: enteredUsername,
    password: enteredPassword
  };

  console.log(user);
  console.log(`Hi, i am ${user.userName}`);
}

form.addEventListener("submit", signupHandler);
