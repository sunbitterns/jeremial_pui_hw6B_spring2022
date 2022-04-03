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

function loadAppointments() {
    let 
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