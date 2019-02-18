import waterOne from '../quest-list.js';
const questDescription = document.getElementById('quest-description');
const questOptions = document.getElementById('quest-options');

const descriptionP = document.createElement('p');
descriptionP.textContent = waterOne.questDescription;
questDescription.appendChild(descriptionP);

for(let i = 0; i < waterOne.questChoices.length; i++) {
    const choiceLabel = document.createElement('label');
    const choiceInput = document.createElement('input');

    choiceInput.type = 'radio';
    choiceInput.name = 'options';
    choiceInput.value = i;
    choiceInput.required = true;

    questOptions.appendChild(choiceLabel);
    choiceLabel.textContent = waterOne.questChoices[i].choiceDescription;
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

    descriptionP.textContent = waterOne.questChoices[chosen].choiceResult;

});