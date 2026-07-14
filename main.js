function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');
  const remember = document.getElementById('rememberMe').checked;

  // Hardcoded login (for demo)
  const correctUsername = "admin";
  const correctPassword = "1234";

  if (username === correctUsername && password === correctPassword) {
    if (remember) {
      localStorage.setItem("rememberedUser", username);
    }
    window.location.href = "dashboard.html";
  } else {
    errorMsg.style.display = "block";
  }
}

function redirectTo(page) {
  window.location.href = page;
}
