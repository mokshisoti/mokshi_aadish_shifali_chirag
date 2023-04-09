
function markAttendance() {
	// Get the current date and time
	const now = new Date();
	const currentHour = now.getHours();
	const currentMinute = now.getMinutes();

	// Check if attendance can be marked
	if (currentMinute >= 0 && currentMinute <= 5) {
		// Attendance can be marked within the first 5 minutes of each hour
		document.getElementById("status").innerHTML = "Attendance marked at " + now.toLocaleTimeString();
		// Disable the button after attendance is marked
		event.target.disabled = true;
	} else {
		// Attendance cannot be marked if it is late
		document.getElementById("status").innerHTML = "Attendance cannot be marked now. Please mark attendance within the first 5 minutes of each hour.";
	}
}

function submitPunishment(event) {
	event.preventDefault();

	// Get the selected punishment
	const punishmentElements = document.getElementsByName("punishment");
	let selectedPunishment = null;
	for (let i = 0; i < punishmentElements.length; i++) {
		if (punishmentElements[i].checked) {
			selectedPunishment = punishmentElements[i].value;
			break;
		}
	}

	// Check if a punishment was selected
	if (selectedPunishment !== null) {
		// Simulate completing the punishment
		alert("Punishment " + selectedPunishment + " completed. Your attendance will be marked for the day. Check tomorrow!");

	} else {
		alert("Please select a punishment.");
	}
}
