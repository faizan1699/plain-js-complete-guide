// async/await for asynchronous operations
async function loadUser() {
  try {
    const res = await fetch("/api/user");
    if (!res.ok) throw new Error("Network error");
    const user = await res.json();
    console.log(user);
  } catch (err) {
    console.error(err);
  }
}

