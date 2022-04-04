let appts;

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

    let html = "<table border='1|1'";
    for (let i = 0; i < appts.length; i++) {
        html+="<tr>";
        html+="<td>"+appts[i].date+"</td>";
        html+="<td>"+appts[i].time+"</td>";
        html+="<td>"+appts[i].type+"</td>";
        html+="<td>"+appts[i].location+"</td>";
        html+="<td><button class='buttonRed' onclick='getIndex(this)'>"+
        "<a href='appt-detail.html'>Edit</a></button></td>";
        html+="<tr>";     
    }
    html+="</table>";

    document.getElementById("appts").innerHTML = html;
}

/* Get index from button row */
function getIndex(element) {
    let index = element.parentNode.parentNode.rowIndex;
    localStorage.setItem("apptIndex", JSON.stringify(index));
}
   
/* Load appointments */
function loadAppts() {
    appts = JSON.parse(localStorage.getItem("appts"));
    if (appts == null || appts == []) {
        document.getElementById("appts").innerHTML = 
        "No appointment history."
    } else {
        generateApptTable();
    }    
}

/* Cancel selected Appointment */
function cancelAppt(i) {
    appts.splice(i, 1);
    localStorage.setItem("appts", JSON.stringify(appts));
    //location.reload();
}

/* Load appointment detail */
function loadApptDetail() {
    appts = JSON.parse(localStorage.getItem("appts"));
    let apptIndex = localStorage.getItem("apptIndex");

    /* Retrieve selected appt
       Not sure why my indices are by doubles...*/
    let selAppt = "";
    if (apptIndex == 0) {
        selAppt = appts[0];
    } else {
        selAppt = appts[apptIndex/2];
    }

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
    cancelBtn.setAttribute("onclick", `cancelAppt("${apptIndex}")`);
}