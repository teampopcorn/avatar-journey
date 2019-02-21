import allQuests from '../js-assets/quest-list.js';
import userDisplay from '../js-assets/user-display.js';

// Get player object from localStorage
const json = window.localStorage.getItem('player');
const player = JSON.parse(json);

userDisplay(player);

const questDescription = document.getElementById('quest-description');
const questOptions = document.getElementById('quest-options');
const mapLink = document.getElementById('map-link');

// Search URL looks for HTML?quest=
const searchURL = window.location.search;
const searchParams = new URLSearchParams(searchURL);
const questTitleToFind = searchParams.get('quest');
let elementToFind = searchParams.get('element');

const mapElement = document.getElementById('quest-element');
mapElement.href = './src/elements-css/' + elementToFind + '.css';

// Setting current quest and creating for loop
let currentQuest = null;
for(let i = 0; i < allQuests[elementToFind + 'Quests'].length; i++) {
    const questTitle = allQuests[elementToFind + 'Quests'][i].questTitle;
    // Defining current quest
    if(questTitle === questTitleToFind) {
        currentQuest = allQuests[elementToFind + 'Quests'][i];
        break;
    }
}

// add quest description to page
const descriptionP = document.createElement('p');
descriptionP.textContent = currentQuest.questDescription;
questDescription.appendChild(descriptionP);

//creates answer  choices as radio buttons 
for(let i = 0; i < currentQuest.questChoices.length; i++) {
    const choiceLabel = document.createElement('label');
    const choiceInput = document.createElement('input');

    choiceInput.type = 'radio';
    choiceInput.name = 'options';
    choiceInput.value = i;
    choiceInput.required = true;

    questOptions.appendChild(choiceLabel);
    choiceLabel.textContent = currentQuest.questChoices[i].choiceDescription;
    choiceLabel.prepend(choiceInput);
}

// creat submit button
const button = document.createElement('button');
button.textContent = 'submit';
questOptions.appendChild(button);

// player submits answer choes
questOptions.addEventListener('submit', function(event) {
    event.preventDefault();
    // After button click, clear out the options
    // Replace with "result" text
    const questOptionsFormData = new FormData(questOptions);
    const chosen = questOptionsFormData.get('options');
    
    // this removes currentQuest form incompleteQuests
    for(let i = 0; i < player.incompleteQuests[elementToFind + 'Quests'].length; i++) {
        const questTitle = player.incompleteQuests[elementToFind + 'Quests'][i];
        if(questTitle === questTitleToFind) {
            player.incompleteQuests[elementToFind + 'Quests'].splice(i, 1);
        }
    }

    // removes current/completed element from player.element if quests are completed
    if(player.incompleteQuests[elementToFind + 'Quests'].length === 0) {
        const mastered = player.element.shift();
        player.masteredElements.push(mastered);
        elementToFind = player.element[0];
    }

    mapLink.href = 'map.html?element=' + elementToFind;
    
    // Check if elements array is empty > then go to results.html
    if(player.element.length === 0) {
        mapLink.href = 'results.html';
        mapLink.textContent = 'See Results';
    }


    // update player score in store it in local Storage
    player.score += currentQuest.questChoices[chosen].choicePoints;
    const json = JSON.stringify(player);
    window.localStorage.setItem('player', json);

    // remove answer 
    descriptionP.textContent = currentQuest.questChoices[chosen].choiceResult;
    questOptions.remove();


});