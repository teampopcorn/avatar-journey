import userDisplay from '../js-assets/user-display.js';
// pulls player object from localStorage
const json = window.localStorage.getItem('player');
const player = JSON.parse(json);

// Look at URL for element
const search = window.location.search;
const searchParams = new URLSearchParams(search);
const elementToFind = searchParams.get('element');

const mapElement = document.getElementById('map-element');
mapElement.href = './src/elements-css/' + elementToFind + '.css';
const questLinks = document.getElementById('quest-links');

userDisplay(player);

// Loops through incompleteQuests and displays them on map page
for(let i = 0; i < player.incompleteQuests[elementToFind + 'Quests'].length; i++) {

    // creates anchor tag
    const questAnchor = document.createElement('a');

    // sets url for anchor tag
    questAnchor.href = 'quest.html?quest=' + encodeURIComponent(player.incompleteQuests[elementToFind + 'Quests'][i]) + '&element=' + elementToFind;
    
    // sets text content for anchor tag
    questAnchor.textContent = player.incompleteQuests[elementToFind + 'Quests'][i];
    
    // Appends anchor tag to DOM
    questLinks.appendChild(questAnchor);
}

