import waterQuests from '../quest-list.js';
const json = window.localStorage.getItem('player');
const player = JSON.parse(json);

const questDescription = document.getElementById('quest-description');
const questOptions = document.getElementById('quest-options');

const searchURL = window.location.search;
const searchParams = new URLSearchParams(searchURL);
const questTitleToFind = searchParams.get('quest');
let currentQuest = null;

for(let i = 0; i < waterQuests.length; i++) {
    const questTitle = waterQuests[i].questTitle;
    if(questTitle === questTitleToFind) {
        currentQuest = waterQuests[i];
        break;
    }
}


const descriptionP = document.createElement('p');
descriptionP.textContent = currentQuest.questDescription;
questDescription.appendChild(descriptionP);

for(let i = 0; i < currentQuest.questChoices.length; i++) {
    const choiceLabel = document.createElement('label');
    const choiceInput = document.createElement('input');

    choiceInput.type = 'radio';
    choiceInput.name = 'options';
    choiceInput.value = i;
    choiceInput.required = true;

    questOptions.appendChild(choiceLabel);
    choiceLabel.textContent = currentQuest.questChoices[i].choiceDescription;
    choiceLabel.appendChild(choiceInput);
}
const button = document.createElement('button');
button.textContent = 'submit';
questOptions.appendChild(button);

questOptions.addEventListener('submit', function(event) {
    event.preventDefault();
    //After button click, clear out the options
    //Replace with "result" text
    const questOptionsFormData = new FormData(questOptions);
    const chosen = questOptionsFormData.get('options');

    player.score += currentQuest.questChoices[chosen].choicePoints;
    const json = JSON.stringify(player);
    window.localStorage.setItem('player', json);

    descriptionP.textContent = currentQuest.questChoices[chosen].choiceResult;
    questOptions.remove();

});