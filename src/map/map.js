import waterQuests from '../quest-list.js';
console.log(waterQuests);

const questLinks = document.getElementById('quest-links');



for(let i = 0; i < waterQuests.length; i++) {
    const questAnchor = document.createElement('a');
    questAnchor.href = 'quest.html?quest=' + encodeURIComponent(waterQuests[i].questTitle);
    questAnchor.textContent = waterQuests[i].questTitle;
    
    questLinks.appendChild(questAnchor);
}
