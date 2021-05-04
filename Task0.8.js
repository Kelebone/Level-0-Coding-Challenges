function minToHrs(num) {
    var compound = num/60;
    var hours = Math.trunc(compound);
    var preMinutes = 60 * (compound - Math.trunc(compound));
    var minutes = Math.round(preMinutes);
// 66 / 60 = 1.1
// hours = 1.1 - 0.1 = 1 hours
// minutes = 0.1 * 60 = 6 minutes
// if hours = 1 then + " hour"
// if minutes = 1 then + " minute"

// compound = num / 60
// hours = Math.trunc(compound)
// if hours = 1 then + " hour"
// minutes = (compound - Math.trunc(compound)) * 60
// if minutes = 1 then + " minute"
if (num > 0) {
if (num === 1) {
  return num + " minute";
}
else if (compound < 1 || num <= 60) {
  return num + " minutes";
}
else if (compound = Number.isInteger(compound)){
  return hours + " hours"
}
else if (num > 61 && num < 120) {
    return hours + " hour " + minutes + " minutes"
}
else if (hours == 1 && minutes == 1) {
  return hours + " hour " + minutes + " minute";
}
else if (minutes == 1 && hours > 1) {
  return hours + " hours " + minutes + " minute"
}
return hours + " hours " + Math.round(minutes) + " minutes";
}
}
