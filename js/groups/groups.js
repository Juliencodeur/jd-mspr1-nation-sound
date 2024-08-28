function showCards(day) {
    let days = ['friday', 'saturday', 'sunday'];
    days.forEach(function (d) {
        let cards = document.querySelectorAll('.' + d);
        if (d === day) {
            cards.forEach(function (card) {
                card.style.display = 'block';
            });
        } else {
            cards.forEach(function (card) {
                card.style.display = 'none';
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    showCards('friday');
});