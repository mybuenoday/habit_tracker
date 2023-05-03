// Get the form, input, table body, button, paragraph, and checkbox elements
const form = document.getElementById("habit-form");
const input = document.getElementById("habit-input");
const tbody = document.getElementById("habit-body");
const button = document.getElementById("clear-button");
const paragraph = document.getElementById("total-habits");
const checkboxes = document.querySelectorAll("input[type='checkbox']");

// Add an event listener to the form to handle submission
form.addEventListener("submit", function(event) {
    
// Prevent the default form action
event.preventDefault();

// Get the value of the input
const habit = input.value;

// Create a new table row element
const tr = document.createElement("tr");

// Create a new table cell element for the habit name
const tdName = document.createElement("td");

// Set the text content of the cell to the habit name
tdName.textContent = habit;

// Append the cell to the row
tr.appendChild(tdName);

// Loop through the days of the week
for (let i = 0; i < 7; i++) {
    
// Create a new table cell element for each day
const tdDay = document.createElement("td");

// Create a new checkbox element for each day
const checkbox = document.createElement("input");
checkbox.type = "checkbox";

// Append the checkbox to the cell
tdDay.appendChild(checkbox);

// Append the cell to the row
tr.appendChild(tdDay);

// Add an event listener to the checkbox to handle change
checkbox.addEventListener("change", function() {
    
// If the checkbox is checked, change the background color of the cell to green
if (checkbox.checked) {
    tdDay.style.backgroundColor = "#8bc34a";
} else {
    // Otherwise, change it back to white
    tdDay.style.backgroundColor = "#fff";
}
});

// Add an event listener to the cell to handle click
tdDay.addEventListener("click", function() {
    
// Toggle the checked state of the checkbox
checkbox.checked = !checkbox.checked;

// Trigger the change event of the checkbox
checkbox.dispatchEvent(new Event("change"));
});
}

// Append the row to the table body
tbody.appendChild(tr);

// Clear the input value
input.value = "";

// Update the total number of habits
updateTotalHabits();
});

// Add an event listener to the button to handle click
button.addEventListener("click", function() {
    
// Confirm with the user before clearing all habits
if (confirm("Are you sure you want to clear all habits?")) {
    // Remove all children from the table body
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    // Update the total number of habits
    updateTotalHabits();
}
});

// Define a function to update the total number of habits
function updateTotalHabits() {
    
// Get the number of rows in the table body
const habitCount = tbody.rows.length;

// Set the text content of the paragraph to show the number of habits
paragraph.textContent = "You have " + habitCount + " habits.";
}