import waterQuests from '../quest-list.js';
const json = window.localStorage.getItem('player');
const player = JSON.parse(json);

const questDescription = document.getElementById('quest-description');
const questOptions = document.getElementById('quest-options');

const descriptionP = document.createElement('p');
descriptionP.textContent = waterQuests[0].questDescription;
questDescription.appendChild(descriptionP);

for(let i = 0; i < waterQuests[0].questChoices.length; i++) {
    const choiceLabel = document.createElement('label');
    const choiceInput = document.createElement('input');

    choiceInput.type = 'radio';
    choiceInput.name = 'options';
    choiceInput.value = i;
    choiceInput.required = true;

    questOptions.appendChild(choiceLabel);
    choiceLabel.textContent = waterQuests[0].questChoices[i].choiceDescription;
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

    player.score += waterQuests[0].questChoices[chosen].choicePoints;
    const json = JSON.stringify(player);
    window.localStorage.setItem('player', json);

    descriptionP.textContent = waterQuests[0].questChoices[chosen].choiceResult;
    questOptions.remove();

});