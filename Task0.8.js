function minToHrs (num) {
    var compound = num/60;
    var hours;
    var minutes;

if (compound > 1) {
    hours = Math.trunc(compound);
    if (hours === 1) {
        return hours + " hour";
    }; 
    minutes = 60 *(compount - hours);
    return hours + "hours, " + Math.trunc(minutes) + "minutes";
}

return num + " minutes";
}