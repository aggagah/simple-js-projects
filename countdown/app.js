// target untuk countdown
var target = new Date("May 2, 2022 00:00:00").getTime()
console.log(target)

// update setiap satu detik
var x = setInterval(function(){
    // date hari ini
    var now = new Date().getTime()

    // gap atau interval antara countdown dengan hari ini
    var interval = target - now

    // proses hitung
    var days = Math.floor(interval / (1000 * 60 * 60 * 24));
    // console.log("days : ", days)

    var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    // console.log("hours : ", hours)

    var minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60 * 60))
    // console.log("minutes : ", minutes)

    var seconds = Math.floor((interval % ( 1000 * 60)) / 1000)
    // console.log("seconds : ", seconds)

    // assign nilai ke element html dengan querySelector dan innerHTML
    document.querySelector('.dayCount').innerHTML = days
    document.querySelector('.hoursCount').innerHTML = hours
    document.querySelector('.minutesCount').innerHTML = minutes
    document.querySelector('.secondsCount').innerHTML = seconds
})


