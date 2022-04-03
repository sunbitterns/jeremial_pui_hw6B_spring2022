// Appointment Constructor
function Appointment (time, date, type, location, comment, details) {
    this.time = time;
    this.date = date;
    this.type = type;
    this.location = location;
    this.comment = comment;
    this.details = details;
}

/* Booking 1: Basic Info*/

// Save appointment Time and Location
function saveApptType() {
    // Retrieve user input for appointment type
    let apptType = document.getElementById("type").value;

    // Set location based on type of appointment 
    let apptLocation = "";
    if (apptType == "Tartan Testing") {
        apptLocation = "TCS (Tata Consultancy Services)";
    } else ( // Booster or Vaccine
    apptLocation = "UHS (University Health Services)"
    )
    // Store type and location  
    sessionStorage.setItem("apptType", JSON.stringify(apptType));
    sessionStorage.setItem("apptLocation", JSON.stringify(apptLocation));
}

/* Booking 2: Schedule Appt */

// Save appointment time and date 
function saveApptTime() {
    // Retrieve user input for timeslot
    let apptTime = document.getElementById("timeSel").value;

    // Retrieve user input for date
    let apptDate = document.getElementById("dateSel").value;

    // Store time and date
    sessionStorage.setItem("apptTime", JSON.stringify(apptTime));
    sessionStorage.setItem("apptDate", JSON.stringify(apptDate));
}

// Display previously selected appointment type and location 
function displayApptType() {
    let apptType = JSON.parse(sessionStorage.getItem("apptType"));
    let apptLocation = JSON.parse(sessionStorage.getItem("apptLocation"));

    document.getElementById("displayApptType").innerHTML 
        = "Schedule <strong>" + apptType + " </strong> at <strong>" 
        + apptLocation + "</strong>";
}

/* Booking 3: Confirmation */
// Display selected appointment details
function displayApptConfirmation() {
    
    // Create new appointment based on user input
    let newAppt = new Appointment(
        JSON.parse(sessionStorage.getItem("apptTime")),
        JSON.parse(sessionStorage.getItem("apptDate")),
        JSON.parse(sessionStorage.getItem("apptType")),
        JSON.parse(sessionStorage.getItem("apptLocation")),
        "", "Edit"
    )

    // Display appointment details 
    document.getElementById("dateProp").innerHTML = 
        "<strong>Date:</strong> " + newAppt.date;
    document.getElementById("timeProp").innerHTML = 
        "<strong>Time:</strong> "+ newAppt.time;
    document.getElementById("typeProp").innerHTML = 
        "<strong>Visit Type:</strong> " + newAppt.type;
    document.getElementById("locationProp").innerHTML = 
        "<strong>Location:</strong> " + newAppt.location;

    // Retrieve existing appts and push new appt into array
    let appts = JSON.parse(sessionStorage.getItem("appts")) || [];
    appts.push(newAppt);
    sessionStorage.setItem("appts", JSON.stringify(appts));
}