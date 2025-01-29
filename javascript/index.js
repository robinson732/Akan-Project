// User input event listener
document
  .getElementById("akanName")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const Day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;

    if (!Day || !month || !year || !gender) {
      alert("Fill all the fields");
      return;
    }

    const index = monthAndYear(Day, month, year);
    const dayName = weekDayNames[index];

    let akanName;
    if (gender === "male") {
      akanName = maleNames[index];
    } else {
      akanName = femaleNames[index];
    }

    // Display Results
    document.getElementById(
      "dayResult"
    ).textContent = `You were born on a ${dayName}.`;
    document.getElementById(
      "akanNameResult"
    ).textContent = `Your Akan name is ${akanName}.`;
  });

// Arrays for Akan names
const weekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Zeller’s Congruence function to calculate the day of the week
function monthAndYear(Day, month, year) {
  if (month < 3) {
    month += 12;
    year -= 1;
  }

  const CC = Math.floor(year / 100);
  const YY = year % 100;
  const zeller =
    (Day +
      Math.floor((13 * (month + 1)) / 5) +
      YY +
      Math.floor(YY / 4) +
      Math.floor(CC / 4) -
      2 * CC) %
    7;

  const index = (zeller + 7) % 7; // Ensure index is always positive
  return index;
}
