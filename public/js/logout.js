//logout function
async function logout() {
  //POST request to back-end for logout
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "content-type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

//event listener for on-click to logout button
document.querySelector("#logout-btn").addEventListener("click", logout);