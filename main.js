// Appointment Constructor
function Appointment (time, date, type, place, comment, details) {
    this.time = time;
    this.date = date;
    this.type = type;
    this.place = place;
    this.comment = comment;
    this.details = details;
}

/* Appointment History 
let appt1 = new Appointment (
    "8:30 AM", 
    "1/5/2022",
    "Tartan SARS-CoV-2 Assay",
    "TTS",
    "NEGATIVE",
    "View Report"
)

let appt2 = new Appointment (
    "8:30 AM", 
    "1/5/2022",
    "Tartan SARS-CoV-2 Assay",
    "TTS",
    "NEGATIVE",
    "View Report"
)*/

var appts = [];
localStorage.setItem("storeAppts", JSON.stringify(appts));

/* Booking 1: Basic Info 
   Save appointment Time and Location */
function saveApptType() {
    // Retrieve user input for appointment type
    var apptType = document.getElementById("type").value;

    // Set location based on type of appointment 
    var apptLocation = "";
    if (apptType == "Tartan Testing") {
        apptLocation = "TCS (Tata Consultancy Services)";
    } else ( // Booster or Vaccine
    apptLocation = "UHS (University Health Services)"
    )
    // Store type and place  
    localStorage.setItem("apptType", JSON.stringify(apptType));
    localStorage.setItem("apptLocation", JSON.stringify(apptLocation));
}

/* Booking 2: Schedule Appt */

// Save appointment time and date 
function saveApptTime() {
    // Retrieve user input for timeslot
    var apptTime = document.getElementById("timeSel").value;

    // Retrieve user input for date
    var apptDate = document.getElementById("dateSel").value;

    // Store time and date
    localStorage.setItem("apptTime", JSON.stringify(apptTime));
    localStorage.setItem("apptDate", JSON.stringify(apptDate));
}

// Display previously selected appointment type and location 
function displayApptType() {
    var apptType = JSON.parse(localStorage.getItem("apptType"));
    var apptLocation = JSON.parse(localStorage.getItem("apptLocation"));

    document.getElementById("displayApptType").innerHTML 
        = "Schedule <strong>" + apptType + " </strong> at <strong>" 
        + apptLocation + "</strong>";
}

/* Booking 3: Confirmation */
function displayApptConfirmation() {
    
    // Check list state 
    var currList = JSON.parse(localStorage.getItem("newApptList"));
    if (currList != null) {
        var apptList = JSON.parse(localStorage.getItem("newApptList"));
    } else {
        apptList = JSON.parse(localStorage.getItem("storeAppts"));
    }

    var newAppt = new Appointment (
        JSON.parse(localStorage.getItem("apptTime")),
        JSON.parse(localStorage.getItem("apptDate")),
        JSON.parse(localStorage.getItem("apptType")),
        JSON.parse(localStorage.getItem("apptLocation")),
        "", "Change Appointment"
    )

    apptList.push(newAppt);
    localStorage.setItem("newApptList", JSON.stringify(apptList)); 

    // Display appointment details 
    document.getElementById("dateProp").innerHTML = 
        "<strong>Date:</strong> " + newAppt.date;
    document.getElementById("timeProp").innerHTML = 
        "<strong>Time:</strong> "+ newAppt.time;
    document.getElementById("typeProp").innerHTML = 
        "<strong>Visit Type:</strong> " + newAppt.type;
    document.getElementById("placeProp").innerHTML = 
        "<strong>Location:</strong> " + newAppt.place;
}

// All Appointments
function loadApptList() {
    var allAppts = JSON.parse(localStorage.getItem("newApptList"));
    console.log(allAppts);
    if (allAppts == null) {
        var apptNumber = 0;
    } else {
        apptNumber = allAppts.length;
        
        // Display number of appointments 
        document.getElementById("apptN").innerHTML = 
        "Appointments (" + apptNumber + ")";

        document.getElementById("apptList").innerHTML = 
            allAppts[apptNumber-1].date + " at " 
            + allAppts[apptNumber-1].time + "<br>" + 
            allAppts[apptNumber-1].type + 
            "<br> <a href='appt-detail.html'>View/Change Appointment</a> <br></br>"
    }
}

function loadDetail() {
    var appts = JSON.parse(localStorage.getItem("newApptList"));
    var selectedAppt = appts[appts.length - 1];
    // Display appointment details 
    document.getElementById("dateProp").innerHTML = 
        "<strong>Date:</strong> " + selectedAppt.date;
    document.getElementById("timeProp").innerHTML = 
        "<strong>Time:</strong> "+ selectedAppt.time;
    document.getElementById("typeProp").innerHTML = 
        "<strong>Visit Type:</strong> " + selectedAppt.type;
    document.getElementById("placeProp").innerHTML = 
        "<strong>Location:</strong> " + selectedAppt.place;
}