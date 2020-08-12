var currentHour = moment().format('H');
console.log(currentHour)
// for loop that goes through each hour
for (var i = 9; i < 18; i++) {
    if (i < currentHour) {
        $("#hour" + i).addClass("past")
    } else if (parseInt(currentHour) === i) {
        $("#hour" + i).addClass("present")
    } else {
        $("#hour" + i).addClass("future")
    }
    var local = localStorage.getItem("hour" + i)
    if (local !== null){
        console.log(local)
        $("#hour" + i).text(local)
    }
}

$(".saveBtn").on( "click" , function(){
    var buttonVal = $(this).val()
    var textAreaVal = $("#hour"+buttonVal).val()
    localStorage.setItem("hour" + buttonVal, textAreaVal)
})
$("#currentDay").text(moment().format('MMMM Do YYYY'))