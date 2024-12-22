// frontend/src/js/login.js
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = document.getElementById("emailOrMobile").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        window.location.href = "./home.html";
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  });
  