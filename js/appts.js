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
    let appts = JSON.parse(sessionStorage.getItem("appts"));

    let html = "<table border='1|1'";
    for (let i = 0; i < appts.length; i++) {
        html+="<tr>";
        html+="<td>"+appts[i].date+"</td>";
        html+="<td>"+appts[i].time+"</td>";
        html+="<td>"+appts[i].type+"</td>";
        html+="<td>"+appts[i].location+"</td>";
        html+="<td>"+appts[i].comment+"</td>";
        if (appts[i].details == "Edit") {
            html+="<td><a href='appt-detail.html'>"+appts[i].details+"</a></td>";
        } else { // View Results
            html+="<td><a href='#'>"+appts[i].details+"</a></td>";
        }
        html+="<tr>";
    }
    html+="</table>";
    document.getElementById("appts").innerHTML = html;
}

/* Load appointments */
function loadAppts() {
    let appts = JSON.parse(sessionStorage.getItem("appts"));
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
    sessionStorage.setItem("appts", JSON.stringify(appts));
}