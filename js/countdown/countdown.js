document.addEventListener("DOMContentLoaded", function () {
    // Set the end date
    var countdownDate = new Date("Jul 18, 2025 12:00:00").getTime();

    // Update countdown every second
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        // Time calculation for months, days, hours, minutes and seconds
        var months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44)); // Approximation des mois
        var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("months").innerHTML = months;
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the countdown is complete
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Événement terminé";
        }
    }, 1000);
});
