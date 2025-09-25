// Personalized Greeting on load
const studentName = prompt("Welcome to USIU! What's your first name?");
alert("Karibu , " + studentName + "!");
console.log("Student entered name:", studentName);
document.getElementById("greeting").textContent = "Hello, " + studentName + "!";

// Estimator
function runEstimator() {
  const days = Number(prompt("How many days per week do you come to campus? (e.g., 3)"));
  const costPerTrip = Number(prompt("Average transport cost per trip in KSh? (e.g., 120)"));
  const snacksPerDay = Number(prompt("Snacks per day? (e.g., 2)"));
  const snackPrice = Number(prompt("Average price per snack in KSh? (e.g., 80)"));

  const transportWeekly = days * costPerTrip * 2; // to & from
  const snacksWeekly = days * snacksPerDay * snackPrice;
  const totalWeekly = transportWeekly + snacksWeekly;
  const save10 = totalWeekly * 0.10;
  const totalWithSavings = totalWeekly - save10;

  console.log({
    days, costPerTrip, snacksPerDay, snackPrice,
    transportWeekly, snacksWeekly, totalWeekly, totalWithSavings
  });

  const summary = `
Generated for: Student ${studentName}

Weekly Transport: KSh ${transportWeekly}
Weekly Snacks:   KSh ${snacksWeekly}
Weekly Total:    KSh ${totalWeekly}
If you cut 10% (e.g., fewer snack runs): KSh ${Math.round(totalWithSavings)}
`;

  document.getElementById("summary").innerText = summary;
  alert("Check your summary on the page. All details logged to console for debugging.");
}

// Theme toggle
function toggleTheme() {
  const current = document.body.style.backgroundColor;
  if (current === "white" || current === "") {
    document.body.style.backgroundColor = "#111";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
  console.log("Theme toggled. Background now:", document.body.style.backgroundColor);
}

// Reset Summary
function resetSummary() {
  document.getElementById("summary").innerText = "Run the estimator to see your weekly plan…";
  console.log("Summary reset.");
}
