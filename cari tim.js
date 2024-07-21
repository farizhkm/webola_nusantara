function searchPlayer() {
    // Get the input value and convert it to lowercase
    var input = document.getElementById('searchInput').value.toLowerCase();
    
    // Get all team cards
    var cards = document.querySelectorAll('.tim-card');
    
    // Loop through all cards
    cards.forEach(function(card) {
        // Get the name of the team from the card's id or data-name attribute
        var teamName = card.querySelector('h2').textContent.toLowerCase();
        
        // If the input value is found in the team name, show the card, otherwise hide it
        if (teamName.includes(input)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

function toggleDetails(teamId) {
    var detailsElement = document.getElementById('details-' + teamId);
    if (detailsElement.style.display === "none" || detailsElement.style.display === "") {
        detailsElement.style.display = "block";
    } else {
        detailsElement.style.display = "none";
    }
}
