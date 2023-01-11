const login = document.getElementsByClassName("account-item")[0];
console.log("lofin: ", login);
const isLogin = JSON.parse(localStorage.getItem("login"));
console.log("isLogin: ", isLogin);
if (isLogin) {
  const user = JSON.parse(localStorage.getItem("acc"));
  login.innerHTML = `<div class="display: flex"><b style="color: white;">${user.email}</b>|<a style="color: white;" href="/f8-html,css/accountUser.html">Tài khoản</a>|<button style="background-color: #c29832" onclick="logout()">Đăng xuất</button><div>`;
}

function logout() {
  localStorage.removeItem("login");
  // localStorage.removeItem("acc");
  window.location.href = "/f8-html,css/home2.html";
}