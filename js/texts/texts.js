var toggleButton = document.getElementById("toggleButton");
    var moreText = document.getElementById("moreText");

    moreText.addEventListener('shown.bs.collapse', function () {
        toggleButton.innerHTML = "Voir moins";
    });

    moreText.addEventListener('hidden.bs.collapse', function () {
        toggleButton.innerHTML = "Lire la suite";
    });