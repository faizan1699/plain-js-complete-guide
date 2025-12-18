// ES2017 async/await
async function loadData() {
  const res = await fetch('/api/data');
  const data = await res.json();
  console.log(data);
}

