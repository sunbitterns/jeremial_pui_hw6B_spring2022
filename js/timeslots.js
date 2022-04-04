// Get timeslots from 8AM to 2PM in 15 minute intervals 
// Citation: https://stackoverflow.com/questions/36125038/generate-array-of-times-as-strings-for-every-x-minutes-in-javascript

let timeslots = [];
let interval = 15;
let startTime = 480; //8:00 AM
let endTime = 840; //2:00 PM
let ap = ['AM', 'PM'];

for (var i = 0; startTime < endTime; i++) {
    var hours = Math.floor(startTime/60);
    var minutes = (startTime%60);
    timeslots[i] = ("0" + (hours % 12)).slice(-2) + ':' + ("0" + minutes).slice(-2) + ap[Math.floor(hours/12)];
    startTime = startTime + interval;
}