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
   Save Appt Time and Location */
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
    localStorage.setItem("storeType", JSON.stringify(apptType));
    localStorage.setItem("storePlace", JSON.stringify(apptLocation));
}

/* Booking 2: Timeslots */
function saveTimeDate() {
    // Retrieve user input for timeslot
    var timeSelect = document.getElementById("timeSel");
    var timeInput = timeSelect.options[timeSelect.selectedIndex].text;

    // Retrieve user input for date
    var dateSelect = document.getElementById("dateSel");
    var dateInput = dateSelect.options[dateSelect.selectedIndex].text;

    // Store time and date
    localStorage.setItem("storeTime", JSON.stringify(timeInput));
    localStorage.setItem("storeDate", JSON.stringify(dateInput));
}

function loadBooking2() {
    var seeType = JSON.parse(localStorage.getItem("storeType"));
    var seePlace = JSON.parse(localStorage.getItem("storePlace"));

    document.getElementById("displayTypePlace").innerHTML 
        = "Schedule <strong>" + seeType + " </strong> at <strong>" 
        + seePlace + "</strong>";
    
    saveTimeDate();
}

/* Booking 3: Confirmation */
function loadBooking3() {
    
    // Check list state 
    var initList = JSON.parse(localStorage.getItem("storeAppts"));
    var currList = JSON.parse(localStorage.getItem("newApptList"));
    if (currList != null) {
        var apptList = JSON.parse(localStorage.getItem("newApptList"));
    } else {
        apptList = JSON.parse(localStorage.getItem("storeAppts"));
    }

    var newAppt = new Appointment (
        JSON.parse(localStorage.getItem("storeTime")),
        JSON.parse(localStorage.getItem("storeDate")),
        JSON.parse(localStorage.getItem("storeType")),
        JSON.parse(localStorage.getItem("storePlace")),
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