// frontend/src/js/signup.js
document.getElementById("registrationForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("User registered successfully!");
        window.location.href = "./login.html";
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  });
  