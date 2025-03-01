const routes = {
  "/login": { templateId: "login" },
  "/dashboard": { templateId: "dashboard" },
};

// Function to update the route dynamically
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
      return navigate("/login"); // Redirect to login if route is invalid
  }

  const template = document.getElementById(route.templateId);
  if (!template) {
      console.error("Template not found:", route.templateId);
      return;
  }

  const view = template.content.cloneNode(true);
  const appDiv = document.getElementById("app");
  appDiv.innerHTML = "";
  appDiv.appendChild(view);

  // Attach form handlers for login and register
  if (path === "/login") {
      document.getElementById("loginForm").addEventListener("submit", login);
      document.getElementById("registerForm").addEventListener("submit", register);
  }

  // Attach logout functionality
  if (path === "/dashboard") {
      document.querySelector("a[href='/login']").addEventListener("click", logout);
      loadUserData();
  }
}

// Function to change routes
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}

// Handle navigation clicks
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.getAttribute("href"));
}

// Handle browser back/forward button navigation
window.onpopstate = () => updateRoute();

// Initial page load
updateRoute();

// Function to handle user login
async function login(event) {
  event.preventDefault(); // Prevent form submission reload

  const username = document.getElementById("username").value.trim();
  if (!username) {
      alert("Please enter a username.");
      return;
  }

  try {
      const response = await fetch(`http://localhost:5000/api/accounts/${username}`);
      if (!response.ok) {
          throw new Error("User not found");
      }

      const userData = await response.json();
      sessionStorage.setItem("user", JSON.stringify(userData)); // Save user data
      alert("Login successful!");
      navigate("/dashboard");

  } catch (error) {
      alert("Login failed: " + error.message);
  }
}

// Function to handle user registration
async function register(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const userData = Object.fromEntries(formData);
  userData.balance = parseFloat(userData.balance) || 0; // Ensure balance is a number

  try {
      const response = await fetch("http://localhost:5000/api/accounts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (result.error) {
          throw new Error(result.error);
      }

      alert("Account created successfully!");
      navigate("/dashboard");

  } catch (error) {
      alert("Registration failed: " + error.message);
  }
}

// Function to handle logout
function logout(event) {
  event.preventDefault();
  sessionStorage.removeItem("user"); // Clear user data
  navigate("/login");
}

// Function to load user data on dashboard
function loadUserData() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user) {
      navigate("/login");
      return;
  }

  document.getElementById("balanceAmount").textContent = `${user.balance} ${user.currency}`;
}
