// frontend/src/js/home.js
window.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");
    const greeting = document.createElement("span");
  
    if (username) {
      greeting.textContent = `Hi ${username}`;
      document.querySelector(".logo").appendChild(greeting);
  
      const logoutButton = document.createElement("button");
      logoutButton.textContent = "Logout";
      logoutButton.addEventListener("click", () => {
        localStorage.clear();
        location.reload();
      });
  
      document.querySelector(".nav-links").appendChild(logoutButton);
    }
  });
  