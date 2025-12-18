// fetch API - GET JSON
async function getUser() {
  const res = await fetch("/api/user");
  if (!res.ok) throw new Error("HTTP " + res.status);
  const data = await res.json();
  return data;
}

