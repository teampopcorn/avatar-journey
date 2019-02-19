const playerForm = document.getElementById('player-form');

playerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const playerFormData = new FormData(playerForm);

    const player = {
        name: playerFormData.get('name'),
        element: playerFormData.get('element'),
        score: 0,
        incompleteQuests: {
            waterQuests: ['water one', 'water two', 'water three']
        }
    };

    const json = JSON.stringify(player);
    window.localStorage.setItem('player', json);
    window.location = 'map.html';
});