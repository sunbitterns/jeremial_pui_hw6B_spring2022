let appts;
let tableDefault = "<table>"+
    "<tr><th>Date</th>"+
    "<th>Time</th>"+
    "<th>Appointment Type</th>"+
    "<th>Location</th>"+
    "<th>Comment</th>"+
    "<th>Details</th></tr>";

/* Sort array based on date & time
   Citation: https://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields
*/
function sortAppts(appts) {
    appts.sort(function (a, b) {
        return a.date.localeCompare(b.date) || b.time - a.time;
    });
}

/* Generate a table from the appointments array
   Citation: https://stackoverflow.com/questions/29335369/display-array-of-objects-in-a-dynamic-table-javascript
*/
function generateApptTable() {
    appts = JSON.parse(localStorage.getItem("appts"));    
    sortAppts(appts);
    localStorage.setItem("appts", JSON.stringify(appts));

    let html = tableDefault;
    let style;

    for (let i = 0; i < appts.length; i++) {

        // Gray out past appointments
        if (appts[i].comment != "") {
            style = "<td class='pastAppt'>";
        } else {
            style = "<td>";
        }

        html+="<tr>";
        html+=style+appts[i].date+"</td>";
        html+=style+appts[i].time+"</td>";
        html+=style+appts[i].type+"</td>";
        html+=style+appts[i].locAbbr+"</td>";
        html+=style+appts[i].comment+"</td>";

        // Edit or View Report options 
        if (appts[i].details == "Edit") {
            html+=style+"<button id='btnEdit' onclick='getIndex(this)'>"+
            "<a href='appt-detail.html'>Edit</a></button></td>";
        } else { // View Report
            html+=style+"<button id='btnEdit' onclick='getIndex(this)'>"+
            "<a href='#'>View Report</a></button></td>";
        }
        
        html+="<tr>";     
    }
    html+="</table>";

    document.getElementById("appts").innerHTML = html;
}

/* Get index from button row */
function getIndex(element) {
    let index = (element.parentNode.parentNode.rowIndex) - 1;
    localStorage.setItem("apptIndex", JSON.stringify(index));
}

/* Load appointments */
function loadAppts() {
    appts = JSON.parse(localStorage.getItem("appts")) || [];
    if (appts.length == 0) {
        document.getElementById("existingAppt").innerHTML = 
        "No upcoming appointments";
    } else {
        generateApptTable();
    }    
}

/* Cancel selected appointment */
function cancelAppt(i) {
    appts.splice(i, 1);
    localStorage.setItem("appts", JSON.stringify(appts));
}

/* Load appointment detail */
function loadApptDetail() {
    appts = JSON.parse(localStorage.getItem("appts"));
    let apptIndex = localStorage.getItem("apptIndex");

    /* Retrieve selected appt
       Not sure why my indices are by doubles...*/
    let selAppt = appts[apptIndex/2];

    // Display appointment details 
    document.getElementById("dateProp").innerHTML = 
        "<strong>Date:</strong> " + selAppt.date;
    document.getElementById("timeProp").innerHTML = 
        "<strong>Time:</strong> "+ selAppt.time;
    document.getElementById("typeProp").innerHTML = 
        "<strong>Visit Type:</strong> " + selAppt.type;
    document.getElementById("locationProp").innerHTML = 
        "<strong>Location:</strong> " + selAppt.location;

    // Cancel button functionality
    let cancelBtn = document.getElementById("cancel");
    cancelBtn.setAttribute("onclick", `cancelAppt("${apptIndex-1}")`);
}