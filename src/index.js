const playerForm = document.getElementById('player-form');

// Take user input and create player profile & sets to local storage
playerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // pulls form information
    const playerFormData = new FormData(playerForm);
    
    // creates player object
    const player = {
        name: playerFormData.get('name'),
        element: playerFormData.get('element'),
        score: 0,
        incompleteQuests: {
            waterQuests: ['water one', 'water two', 'water three'],
            earthQuests: ['earth one', 'earth two', 'earth three']
        },
        element: ['water', 'earth']
    };

    // stores player object within localStorage
    const json = JSON.stringify(player);
    window.localStorage.setItem('player', json);
    window.location = 'map.html?element=' + player.element[0];
});