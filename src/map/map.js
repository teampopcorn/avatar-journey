import waterQuests from '../quest-list.js';
console.log(waterQuests);
const json = window.localStorage.getItem('player');
const player = JSON.parse(json);

const questLinks = document.getElementById('quest-links');



for(let i = 0; i < player.incompleteQuests.waterQuests.length; i++) {
    const questAnchor = document.createElement('a');
    questAnchor.href = 'quest.html?quest=' + encodeURIComponent(player.incompleteQuests.waterQuests[i]);
    questAnchor.textContent = player.incompleteQuests.waterQuests[i];
    
    questLinks.appendChild(questAnchor);
}
