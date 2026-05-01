async function save() {
  await fetch("/api/portfolio", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(portfolio)
  });

  alert("Saved to GitHub!");
}
