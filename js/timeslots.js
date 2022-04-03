
/*
CODE FOR GENERATING TIMESLOTS????

// Available days (COLS)
let days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


// Get timeslots from 8AM to 2PM in 15 minute intervals 
// Citation: https://stackoverflow.com/questions/36125038/generate-array-of-times-as-strings-for-every-x-minutes-in-javascript

let timeslots = [];
let interval = 15;
let startTime = 480;
let endTime = 500;
let ap = ['AM', 'PM'];

for (var i = 0; startTime < endTime; i++) {
    var hours = Math.floor(startTime/60);
    var minutes = (startTime%60);
    timeslots[i] = ("0" + (hours % 12)).slice(-2) + ':' + ("0" + minutes).slice(-2) + ap[Math.floor(hours/12)];
    startTime = startTime + interval;
}

// Create list of all available appointments
// To-do: Be able to filter these times based on user input 
// To-do: Update location and type based on user input from previous page
let appts = [];
for (var i  = 0; i < days.length; i++) {
    for (var j  = 0; j < timeslots.length; j++) {
        var appt = new Appointment(days[i], timeslots[j], 
            "Tartan Testing", "TTS");
            appts.push(appt);
    }
}

// Populate table in HTML with available times
// Citation: https://stackoverflow.com/questions/17684201/create-html-table-from-javascript-object
function onLoad() {
    
    var days = ["Monday", "Tuesday", "Wednesday"];
    var times = ["08:00", "08:15", "08:30"];
    for (var i = 0; i < Object.keys(appts).length; i++) {
        var tr = "<tr>";
        tr += "<td>" + appts[i].date + "</td>" + "<td>" 
            + appts[i].time + "</td></tr>";
        tbody.innerHTML += tr;
    }
}
*/