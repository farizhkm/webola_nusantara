function searchPlayer() {
    
    var input = document.getElementById('searchInput').value.toLowerCase();
    
    
    var cards = document.querySelectorAll('.tim-card');
    
    
    cards.forEach(function(card) {
        
        var teamName = card.querySelector('h2').textContent.toLowerCase();
        
        
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
