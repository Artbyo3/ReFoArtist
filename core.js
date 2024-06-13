function filterCards(category) {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display = card.getAttribute('data-category') === category ? 'block' : 'none';
        }
    });
}


