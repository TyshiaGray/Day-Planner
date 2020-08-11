var currentHour = moment().format('H');
console.log(currentHour)
for (var i = 9; i < 18; i++) {
    if (i < currentHour) {
        $("#hour" + i).addClass("past")
    } else if (parseInt(currentHour) === i) {
        $("#hour" + i).addClass("present")
    } else {
        $("#hour" + i).addClass("future")
    }
}