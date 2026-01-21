async function fetchUsers() {
  const usersDiv = document.getElementById("users");
  const loadingText = document.getElementById("loading");
 
  usersDiv.innerHTML = "";
  loadingText.textContent = "Loading users...";
 
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
 
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
 
    const users = await response.json();
 
    loadingText.textContent = "";
 
    users.forEach(user => {
      const div = document.createElement("div");
      div.className = "user";
 
      div.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>City: ${user.address.city}</p>
      `;
 
      usersDiv.appendChild(div);
    });
 
  } catch (error) {
    loadingText.textContent = "Error loading data";
    console.error(error);
  }
}
 
 