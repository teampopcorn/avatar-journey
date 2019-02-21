const playerForm = document.getElementById('player-form');

// Take user input and create player profile & sets to local storage
playerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // pulls form information
    const playerFormData = new FormData(playerForm);
    
    // creates player object
    const player = {
        name: playerFormData.get('name'),
        masteredElements:[playerFormData.get('element')],
        score: 0,
        incompleteQuests: {
            waterQuests: ['Sparring Tournament', 'Ambush', 'Kiyoshi on Fire'],
            earthQuests: ['earth one', 'earth two', 'earth three'],
            fireQuests: ['Introduction to Fire Bending', 'Volcanic Eruption', 'Barbarian Pillaging'],
            airQuests: ['air one', 'air two', 'air three']
        },
        element: makeCycle(playerFormData.get('element'))
    };

    // stores player object within localStorage
    const json = JSON.stringify(player);
    window.localStorage.setItem('player', json);
    window.location = 'map.html?element=' + player.element[0];
});

// When element is chosen function returns remaining elements
function makeCycle(startElement) {
    switch(startElement) {
        case 'air': 
            return ['water', 'earth', 'fire'];
        case 'water':
            return ['earth', 'fire', 'air'];
        case 'earth':
            return ['fire', 'air', 'water'];
        case 'fire':
            return ['air', 'water', 'earth'];
    }
}
